const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
const traindata = require('./controller/scoreController');

dotenv.config({ path: './config.env' });

//Connecting backend to database using mongoose
mongoose.connect(process.env.DB).then(() => {
  console.log('DB connection successful');
});

//checking if database contains trained dataset
if (process.env.TRAINDATA === 'true') {
  traindata.traineddata;
}

//running server
app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log(err);
  else console.log('Server is Live......');
});
