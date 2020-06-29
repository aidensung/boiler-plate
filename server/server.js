const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const config = require('./config/key');

const { User } = require('./models/User');
const { auth } = require('./middleware/auth');

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', function (req, res, next) {
    if (req.url.includes('/api/')) return next();
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/api/users/signup', (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) return res.status(400).json(err);
    return res.status(200).json(req.body);
  });
});

app.post('/api/users/signin', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.status(401).json(err);
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.status(401).json(err);
      }

      user.generateToken((err, user) => {
        if (err) return res.status(400).json(err);

        return res.cookie('x_auth', user.token).status(200).json(user);
      });
    });
  });
});

app.get('/api/users/signout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.status(400).json(err);
    return res.status(200).clearCookie('x_auth').json(user);
  });
});

app.get('/api/users/auth', auth, (req, res) => {
  return res.status(200).json(req.user);
});
