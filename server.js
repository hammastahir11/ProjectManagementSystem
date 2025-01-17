const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const usr = require('./Routes/user');
const prj = require('./Routes/project');
const tsk= require('./Routes/task');

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/users', usr);
app.use('/projects', prj);
app.use('/tasks',tsk);

app.listen(PORT, function() {
    console.log('Server is running on Port:', PORT);
});
