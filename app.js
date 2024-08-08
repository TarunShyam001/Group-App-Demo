const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginRouter = require('./routes/login');
const chatRouter = require('./routes/chat');

app.use(bodyParser.urlencoded({extended : false}));

app.use(loginRouter);
app.use(chatRouter);

const port = 3300;

app.listen(port, () => {
    console.log(`the chat app is running on http://localhost:${port}/login-page`);
})