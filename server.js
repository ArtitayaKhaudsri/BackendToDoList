const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const toDoListRouter = require('./router/toDoListRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', toDoListRouter);

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})