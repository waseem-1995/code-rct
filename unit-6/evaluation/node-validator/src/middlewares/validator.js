// import required modules
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan(':method :status :res[content-length] :response-time ms :date[web] HTTP/:http-version :url\n', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.status("200").send({ message: 'welcome to server' });
});

app.get('/get-users', (req, res) => {
  res.status(200).send({ message: 'here is the list of all users' });
});

app.post('/add-user', (req, res) => {
  res.status(201).send({ message: 'user added successfully' });
});

app.put('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.status(201).send({ message: `user ${userId} updated successfylly` });
});

app.delete('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.status(200).send({ message: `user ${userId} deleted successfylly` });
});

module.exports = app;

// export the server
// eg.module.exports = app;
