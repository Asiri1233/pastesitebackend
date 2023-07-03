const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) .then(() => {console.log('Connected to MongoDB')})
  .catch(err => console.log(err));

const textRouter = require('./routes/text.js');

app.use('/api/text', textRouter);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});