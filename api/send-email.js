import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MY_EMAIL}>`,
      to: process.env.MY_EMAIL,
      replyTo: email,
      subject: subject || `Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

${message}
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
}