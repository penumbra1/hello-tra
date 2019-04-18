const dataProvider = require("./mockDataProvider");
const sendMail = require("./mailer");

module.exports = {
  Query: {
    hello: async () => {
      await sendMail();
      return "Hello world!";
    },
    cities: () => dataProvider.getCities(),
    jobs: (_, { city }) => dataProvider.getJobOpenings(city)
  },
  Mutation: {
    send: async (
      _,
      {
        emailData: {
          name,
          email,
          phone,
          city,
          job,
          htmlComment,
          textComment,
          attachment
        }
      }
    ) => {
      const subject = `${name} - ${job} - ${city.title}`;
      const phoneContact = `Phone: ${phone}`;
      const mailContact = `Email: ${email}`;
      const htmlBody = htmlComment || `<p>${textComment}</p>`;
      const html = `${htmlBody}<p>${phoneContact}</p><p>${mailContact}</p>`;
      const text = `${textComment}\n${phoneContact}\n${mailContact}`;
      console.log(attachment);
      const attachments = [];
      if (attachment) {
        const {
          stream,
          filename,
          mimetype: contentType,
          encoding
        } = await attachment;
        attachments.push({
          filename,
          content: stream
        });
        console.log(attachments);
      }

      await sendMail({ subject, html, text, attachments });

      return `${subject} ${text}`;
    }
  }
};
