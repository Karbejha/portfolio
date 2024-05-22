import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const { email, subject, message } = await req.json();

    // Email to site owner
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: [process.env.EMAIL_TO],
      subject: subject,
      html: `<p>From: ${email}</p><p>${message}</p>`,
    });

    // Confirmation email to sender
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: [email],
      subject: 'Confirmation: Message Received',
      html: `<p>Thank you for your message. We have received it and will get back to you shortly.</p>`,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
