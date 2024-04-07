const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware для разбора тела POST-запросов
app.use(bodyParser.urlencoded({ extended: true }));

// Обработка POST-запроса с формы
app.post('/send-email', (req, res) => {
  // Получение данных из тела запроса
  const { name, email, message } = req.body;

  // Настройка транспортера для отправки электронной почты
  const transporter = nodemailer.createTransport({
    service: 'mail',
    auth: {
      user: 'draparov_m@mail.ru',
      pass: '_ePfiomTUO24'
    }
  });

  // Настройка письма
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Отправка письма
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
