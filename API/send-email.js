

const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
	// Parse the request body
	const { name, email, subject, message } = req.body;

	// Create a transporter object using your email provider's SMTP server
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: "jonmitchell1234@gmail.com",
			pass: "process.env.password",
		},
	});

	// Set up the email options
	const mailOptions = {
		from: `"${name}" <${email}>`,
		to: "jonmitchell1234@gmail.com",
		subject,
		text: message,
	};

	// Send the email
	try {
		await transporter.sendMail(mailOptions);
		res.status(200).send("Email sent successfully");
	} catch (error) {
		console.error(error);
		res.status(500).send("Error sending email");
	}
};
