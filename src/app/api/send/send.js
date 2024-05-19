import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // You can use other services as well like SendGrid, Mailgun, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or an app-specific password
      },
    });

    // Email options
    let mailOptions = {
      from: email, // Sender address
      to: 'mohmad.karbejha@gmail.com', // List of recipients
      subject: subject, // Subject line
      text: message, // Plain text body
      html: `<p>${message}</p>`, // HTML body
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
