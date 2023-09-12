const mailgun = require("mailgun-js");

const DOMAIN = 
  //Add mailgun Domain here.
const mg = mailgun({
  apiKey: 
    //Add mailgun API key here.
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
