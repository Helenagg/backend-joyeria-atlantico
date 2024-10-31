require('dotenv').config();
console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/email', emailRoutes); // Usar las rutas de email

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});