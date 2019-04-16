const nodemailer = require("nodemailer");

const addresses = {
  from: "hello-tra@tra.ai",
  to: "penumbral@yandex.ru"
};

let transporter = null;

const setup = async function setup() {
  // Generate test SMTP service account from ethereal.email
  const testAccount = await nodemailer.createTestAccount();

  transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
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
