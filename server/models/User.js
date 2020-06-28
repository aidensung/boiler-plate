const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const config = require('../config/key');

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    maxlength: 50,
    required: true,
  },
  lastname: {
    type: String,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt
      .hash(user.password, saltRounds)
      .then((hash) => {
        user.password = hash;
        next();
      })
      .catch((err) => next(err));
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, callBack) {
  bcrypt
    .compare(plainPassword, this.password)
    .then((isMatch) => {
      return callBack(null, isMatch);
    })
    .catch((err) => {
      return callBack(err);
    });
};

userSchema.methods.generateToken = function (callBack) {
  const user = this;

  const token = jwt.sign(user._id.toHexString(), config.JWT_SECRET);

  user.token = token;

  user.save(function (err, user) {
    if (err) return callBack(err);
    callBack(null, user);
  });
};

userSchema.statics.findByToken = function (token, callBack) {
  const user = this;

  jwt.verify(token, config.JWT_SECRET, function (err, decoded) {
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return callBack(err);
      callBack(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
