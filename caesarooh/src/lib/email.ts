import nodemailer from 'nodemailer';
import { ContactFormData } from '../services/formService';

// Email configuration interface
interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Get email configuration from environment variables
const getEmailConfig = (): EmailConfig => {
  const requiredVars = [
    'EMAIL_HOST',
    'EMAIL_PORT',
    'EMAIL_USER',
    'EMAIL_PASS',
  ];

  const missingVars = requiredVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }

  return {
    host: process.env.EMAIL_HOST!,
    port: parseInt(process.env.EMAIL_PORT!, 10),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  };
};

// Create transporter instance
const createTransporter = () => {
  const config = getEmailConfig();
  return nodemailer.createTransport(config);
};

// Send contact form email
export const sendContactFormEmail = async (
  data: ContactFormData
): Promise<void> => {
  try {
    const transporter = createTransporter();
    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Thank you for contacting us',
      html: `
        <h2>Thank you for contacting us</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>The Team</p>
      `,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}; 