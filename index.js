require("dotenv").config();
const express= require('express');
const cors = require('cors');
const { connectingToDb } = require('./database');
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes');
const app = express()
const PORT = 3200
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/users', userRoutes);

const startServer = async () => {
    try {
      await connectingToDb();
  
      app.listen(PORT, () => {
        console.log("Listening on port: " + PORT);
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  startServer();