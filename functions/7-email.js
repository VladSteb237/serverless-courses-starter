require("dotenv").config();
const nodemailer = require("nodemailer");
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

exports.handler = async (event, context, cb) => {
  const method = event.httpMethod;
  if (method !== "POST") {
    return {
      statusCode: 405,
      body: "Only POST Request Allowed!",
    };
  }
  const { name, email, subject, message } = JSON.parse(event.body);
  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: "Please provide a valid value!",
    };
  }
  const data = {
    from: "Vlad Steb <vladsteb@rambler.ru>",
    to: `${name} <${email}>`,
    subject: subject,
    html: `<p>${message}</p>`,
  };
  try {
    transporter.sendMail({ ...data });
    return {
      statusCode: 200,
      body: "Success!",
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error.message),
    };
  }
};
