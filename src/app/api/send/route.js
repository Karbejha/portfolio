import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_T7zw4hDj_AmKaQbKH1pkpEJ6osgFEGX4L');
resend.apiKeys.list();
resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'mohamad.karbejha@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
