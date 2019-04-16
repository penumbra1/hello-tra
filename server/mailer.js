const nodemailer = require("nodemailer");

const addresses = {
  from: process.env.MAIL_USER,
  to: process.env.MAIL_RECIPIENT
};

let transporter = null;

const setup = async function setup() {
  transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  });
};

module.exports = async function sendMail({ subject, html, attachment }) {
  if (!transporter) {
    await setup();
  }

  const info = await transporter.sendMail({
    ...addresses,
    subject,
    text: "Hello world?", // plain text body
    html,
    attachments: attachment ? [attachment] : null
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
