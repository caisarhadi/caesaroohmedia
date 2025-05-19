/**
 * Environment Variables Documentation
 * 
 * This file serves as documentation for required environment variables.
 * Create a .env.local file in the project root with these variables.
 */

export const requiredEnvVariables = {
  // Email Configuration
  EMAIL_HOST: {
    description: 'SMTP server host',
    example: 'smtp.example.com',
    required: true,
  },
  EMAIL_PORT: {
    description: 'SMTP server port',
    example: '587',
    required: true,
  },
  EMAIL_SECURE: {
    description: 'Use secure connection (true/false)',
    example: 'false',
    required: false,
    default: 'false',
  },
  EMAIL_USER: {
    description: 'SMTP server username/email',
    example: 'your-email@example.com',
    required: true,
  },
  EMAIL_PASS: {
    description: 'SMTP server password or app-specific password',
    example: 'your-password',
    required: true,
  },
  ADMIN_EMAIL: {
    description: 'Admin email to receive notifications (defaults to EMAIL_USER if not set)',
    example: 'admin@example.com',
    required: false,
  },
}; 