import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Parse the incoming request data (form data)
    const body = await req.json();
    console.log("request: ", body);

    // Destructure the necessary fields from the body
    const { firstName, lastName, companyName, officialEmail, industry,problemStatement } = body;

    // Send the emails
    await sendEmails({ firstName, lastName, companyName, officialEmail, industry ,problemStatement});

    // Send a response indicating success
    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error("Error processing the request: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// Function to send emails using Nodemailer
async function sendEmails({ firstName, lastName, companyName, officialEmail, industry ,problemStatement}) {
  console.log("in sending email")

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASSWORD, // your email password
    },
    // host: 'smtp.myraatechnologies.com', // SMTP server
    // port: 587, // Standard port for STARTTLS
    // secure: false, // Use TLS
    // auth: {
    //      user: process.env.SMTP_USER, // your email
    //   pass: process.env.SMTP_PASSWORD, // your email password
    //   // user: 'ai-playground@myraatechnologies.com', // Company email
    //   // pass: 'devx@190924', // Company email password
    // },
  });
  console.log("after transport")
  // Email to the owner
  const ownerMailOptions = {
    from: process.env.SMTP_USER,
    to: 'gautamsodhi111@gmail.com',
    subject: 'New Registration Form Submission',
    text: `New registration:
      Name: ${firstName} ${lastName}
      Company: ${companyName}
      Email: ${officialEmail}
      Industry: ${industry}
      problemStatement: ${problemStatement}
    `,
  };

  // Email to the user
  const userMailOptions = {
    from: process.env.SMTP_USER,
    to: officialEmail,
    subject: 'Thank you for registering',
    text: `Hi ${firstName},\n\nThank you for registering with us. We will get in touch with you soon.\n\nBest regards,\nYour Team`,
  };

  // Send the emails
  try {
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);
    console.log("Emails sent successfully!");
  } catch (error) {
    console.error("Error sending emails: ", error);
    throw new Error("Failed to send emails");
  }
}