const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const url = process.env.DB_URL;
const cors = require('cors');
const Mentor = require('./models/mentor');
const colors = require('colors');
const mongoose = require('mongoose');

const mentorRoute = require('./routes/mentor');
const userRoute = require('./routes/user');

// connect to db;
const connnectToDB = async () => {
  await mongoose.connect(url);
  console.log('Connected to DB'.green);
};
connnectToDB();

app.use(cors());
app.use(express.json());
app.use('/mentors', mentorRoute);
app.use('/auth', userRoute);

app.get('/mentor', async (req, res) => {
  // db and fetch all courses
  let mentors = await Mentor.find();
  res.json(mentors);
});

app.listen(port, () => console.log(`Server is running on Port ${port}...`));
