const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const toDoListRouter = require('./router/toDoListRouter');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', toDoListRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Start server at port " + port)
})

module.exports = app;