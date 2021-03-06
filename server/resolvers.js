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
          htmlComment = "",
          textComment = "I left no comment but I like you.",
          attachment
        }
      }
    ) => {
      const subject = `${name} - ${job} - ${city.title}`;
      const phoneContact = `Phone: ${phone}`;
      const mailContact = `Email: ${email}`;

      const htmlBody = htmlComment || `<p>${textComment}</p>`;
      const html = `${htmlBody}${phoneContact &&
        `<p>${phoneContact}</p>`}${mailContact}</p>`;
      const text = [textComment, phoneContact, mailContact].join("\n");

      const attachments = [];
      if (attachment) {
        const { createReadStream, filename } = await attachment;
        attachments.push({
          filename,
          content: createReadStream()
        });
      }

      await sendMail({ subject, html, text, attachments });

      return `${subject} ${text}`;
    }
  }
};
