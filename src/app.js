const express = require('express');
const login = require('./routes/login.route');
const user = require('./routes/user.route');
const categories = require('./routes/categories.route');
const posts = require('./routes/post.route');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', login);
app.use('/user', user);
app.use('/categories', categories);
app.use('/post', posts);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
