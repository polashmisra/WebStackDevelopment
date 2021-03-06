const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
//require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();
//authRoutes(app);
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000; 
app.listen(PORT);


