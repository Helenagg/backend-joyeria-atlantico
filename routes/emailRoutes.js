const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Aquí va tu configuración de Nodemailer

router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    // Lógica para enviar el correo usando Nodemailer
});

module.exports = router;