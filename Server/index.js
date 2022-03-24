const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const port = process.env.PORT;
const colors = require('colors');

const courseRoute = require('./routes/course');
const employeeRoute = require('./routes/employee');
const userRoute = require('./routes/user');

// connect to db;
const url = 'mongodb://localhost:27017/eclerxdb';
const connnectToDB = async () => {
  await mongoose.connect(url);
  console.log('connected to db'.green);
};
connnectToDB();

app.use(cors());
app.use(express.json());
app.use('/courses', courseRoute);
app.use('/employees', employeeRoute);
app.use('/auth', userRoute);

app.get('/employee', async (req, res) => {
  // db and fetch all courses
  let employees = await Employee.find();
  res.json(employees);
});

app.listen(port, () => console.log(`Server is running on Port ${port}...`));
