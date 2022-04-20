const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const url = process.env.DB_URL;
const cors = require('cors');
const mongoose = require('mongoose');
const colors = require('colors');
const mentorRoute = require('./routes/mentor');
const courseRoute = require('./routes/course');
const userRoute = require('./routes/user');
const errorHandler = require('./middlewares/errorHandler');

// connect to db;
const connnectToDB = async () => {
  await mongoose.connect(url);
  console.log('Connected to DB'.green);
};
connnectToDB();

// pre middlewares
app.use(cors());
app.use(express.json());
app.use('/auth', userRoute);
app.use('/mentors', mentorRoute);
app.use('/courses', courseRoute);

//post middlewares
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on Port ${port}...`));
