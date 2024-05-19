import nodemailer from 'nodemailer';

export async function POST(req, res) {
  try {
    const { email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: subject,
      text: `From: ${email}\n\n${message}`,
    };

    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation: Message Received',
      text: 'Thank you for your message. We have received it and will get back to you shortly.',
    };

    // Send mail to site owner
    await transporter.sendMail(mailOptions);

    // Send confirmation mail to sender
    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
