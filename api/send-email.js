import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: import.meta.env.MY_EMAIL,
      pass: import.meta.MY_EMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: import.meta.env.MY_EMAIL,
      replyTo: email,
      to: import.meta.env.MY_EMAIL,
      subject: subject || `New contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Failed to send" });
  }
}
