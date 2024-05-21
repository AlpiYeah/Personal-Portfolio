// Import necessary modules
import { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

// Initialize Resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the handler function for POST requests
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Ensure that the request method is POST
    try {
      // Parse the request body as JSON
      const { email, name, message, subject } = req.body;

      // Send email using Resend
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: "alpersyuleyman2002@gmail.com",
        subject: subject,
        react: EmailTemplate({ name, subject, message, email }),
      });

      // Check the status of the email sending operation
      if (data.status === "success") {
        // Return success response
        res.status(200).json({ message: "Email successfully sent!" });
      } else {
        // Return error response
        res.status(500).json(data);
      }
    } catch (error) {
      // Handle any errors that occur during the process
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    // Return 405 Method Not Allowed for other request methods
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
