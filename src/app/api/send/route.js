import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // You can use other services as well like SendGrid, Mailgun, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your app-specific password
      },
    });

    // Corrected email address
    const myEmail = 'mohamad.karbejha@gmail.com';

    // Email options for the email to yourself
    let mailOptionsToSelf = {
      from: `${email} <${process.env.EMAIL_USER}>`, // Show sender's email in the from field
      replyTo: email, // Reply to the sender's email
      to: myEmail, // Corrected email address
      subject: subject, // Subject line
      text: message, // Plain text body
      html: `<p>${message}</p>`, // HTML body
    };

    // Email options for the acknowledgment email to the sender
    let mailOptionsToSender = {
      from: process.env.EMAIL_USER, // Your email address
      to: email, // Sender's email address
      subject: 'Your message was received',
      text: `Hi there,

Thank you for reaching out! Your message has been received, and I will get back to you as soon as possible.

Best regards,
[Your Name]`,
      html: `<p>Hi there,</p>
<p>Thank you for reaching out! Your message has been received, and I will get back to you as soon as possible.</p>
<p>Best regards,<br>Mohamad Karbejha</p>`,
    };

    // Send email to yourself
    await transporter.sendMail(mailOptionsToSelf);

    // Send acknowledgment email to the sender
    await transporter.sendMail(mailOptionsToSender);

    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email.' }), { status: 500 });
  }
}
