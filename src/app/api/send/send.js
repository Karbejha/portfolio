const nodemailer = require("nodemailer");

export default async (req, res) => {

const { firstName, lastName, email, message } = JSON.parse(req.body);

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "mohamad.karbejha@gmail.com",
        pass: "Real-madrid-23",
    },
    secure: true,
});

await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

const mailData = {
    from: {
        name: `${firstName} ${lastName}`,
        address: "mohamad.karbejha@gmail.com",
    },
    replyTo: email,
    to: email,
    subject: `form message`,
    text: message,
    html: `${message}`,
};

await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});

res.status(200).json({ status: "OK" });
};