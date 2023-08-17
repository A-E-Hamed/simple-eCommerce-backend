const mailgun = require("mailgun-js");

const DOMAIN = "sandboxce0315d5aa874632b914a11861bf5300.mailgun.org";
const mg = mailgun({
  apiKey: "key-06ea8d0d06dd5667746d29dc709bf015",
  domain: DOMAIN,
});

const sendMail = (data) => {
  mg.messages().send(data, (error, body) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent:", body);
    }
  });
};

module.exports = sendMail;
