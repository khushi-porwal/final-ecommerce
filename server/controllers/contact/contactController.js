// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

// export const sendContactEmail = async (req, res) => {
//     const { name, email, message } = req.body;

//     try {
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         const mailOptions = {
//             from: email,
//             to: process.env.EMAIL_USER,
//             subject: `New contact from ${name}`,
//             html: `
//                 <h3>Contact Details</h3>
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Message:</strong> ${message}</p>
//             `,
//         };

//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//         console.error("Error sending email:", error);
//         res.status(500).json({ error: "Failed to send email" });
//     }
// };




// server/controllers/contact/contactController.js
import nodemailer from "nodemailer";

export const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // your App Password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
};
