import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    
    let transporter = nodemailer.createTransport({
      service: 'Gmail', 
      port: 465,
      host:'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
      secure: true,
    });

   
    const myEmail = 'mohamad.karbejha@gmail.com';

    
    let mailOptionsToSelf = {
      from: `${email} <${process.env.EMAIL_USER}>`, 
      replyTo: email, 
      to: myEmail, 
      subject: subject, 
      text: message, 
      html: `<p>${message}</p>`, 
    };

    
    let mailOptionsToSender = {
      from: process.env.EMAIL_USER, 
      to: email, 
      subject: 'Your message was received',
      text: `Hi there,

Thank you for reaching out! Your message has been received, and I will get back to you as soon as possible.

Best regards,
Mohamad Karbejha`,
      html: `<p>Hi there,</p>
<p>Thank you for reaching out! Your message has been received, and I will get back to you as soon as possible.</p>
<p>Best regards,<br>Mohamad Karbejha</p>`,
    };

    
    await transporter.sendMail(mailOptionsToSelf);

     
    await transporter.sendMail(mailOptionsToSender);

    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email.' }), { status: 500 });
  }
}
