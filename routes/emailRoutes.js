const express = require('express');
const nodemailer = require('nodemailer')
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})

router.post('/', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Reemplaza esto con el correo al que deseas enviar
        subject: `Nuevo mensaje de ${name}: ${subject}`,
        text: message,
        replyTo: email, // Permite responder al correo del remitente
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error al enviar el correo');
        }
        res.status(200).send('Correo enviado con éxito');
    });
});

module.exports = router;