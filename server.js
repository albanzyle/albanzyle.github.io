const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg'); // Import the Pool class from pg
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the CORS middleware
app.use(cors());

// Create a PostgreSQL database connection pool
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'contact',
  password: process.env.DB_PASSWORD || 'Albanzyle2022!',
  port: process.env.DB_PORT || 5432,
});
 
// Function to send email
async function sendEmail(name, email, telephone, message) {
  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'zylealban@gmail.com', // Your Gmail email address
      pass: process.env.EMAIL_PASSWORD || 'zrlwpyeprutieete', // Your Gmail password
    },
  });

// Send mail with defined transport object
let info = await transporter.sendMail({
  from: '"TOKA CONSTRUCTION" zylealban@gmail.com',
  to: 'alban.zyle@fti.edu.al',
  subject: 'New Comment Notification',
  text: `Hello Ardian,

  There is a new comment for you. Here are the details:

  Name: ${name}
  Email: ${email}
  Telephone: ${telephone}
  Message: ${message}

  Best regards,
  TOKA CONSTRUCTION`,
    html: `<p>Hello Ardian,</p>
  <p>There is a new comment for you. Here are the details:</p>
  <ul>
    <li><b>Name:</b> ${name}</li>
    <li><b>Email:</b> ${email}</li>
    <li><b>Telephone:</b> ${telephone}</li>
    <li><b>Message:</b> ${message}</li>
  </ul>
  <p>Best regards,<br>TOKA CONSTRUCTION</p>`,
  });


  console.log('Message sent: %s', info.messageId);
}


// POST endpoint for handling contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, telephone, message } = req.body;
    
    // Insert the message into the database
    const queryText = 'INSERT INTO messages (name, email, telephone, message) VALUES ($1, $2, $3, $4)';
    await pool.query(queryText, [name, email, telephone, message]);

    // Send email
    await sendEmail(name, email, telephone, message);

    // Respond with success message
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
