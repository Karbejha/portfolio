import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const myEmail = 'mohamad.karbejha@gmail.com';

    // Email to self
    await resend.emails.send({
      from: `${email} <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: [myEmail],
      subject: subject,
      html: `<p>${message}</p>`,
    });

    // Confirmation email to sender
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: [email],
      subject: 'Your message was received',
      html: `<p>Hi there,</p>
             <p>Thank you for reaching out! Your message has been received, and I will get back to you as soon as possible.</p>
             <p>Best regards,<br>Mohamad Karbejha</p>`,
    });

    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email.' }), { status: 500 });
  }
}
