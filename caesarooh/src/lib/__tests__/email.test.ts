import { sendContactFormEmail } from '../email';
import { mockContactFormData, mockEmailConfig } from './apiMocks';
import nodemailer, { Transporter } from 'nodemailer';

// Mock nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue(true),
  } as unknown as Transporter),
}));

describe('Email Utility', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      EMAIL_HOST: mockEmailConfig.host,
      EMAIL_PORT: String(mockEmailConfig.port),
      EMAIL_SECURE: String(mockEmailConfig.secure),
      EMAIL_USER: mockEmailConfig.auth.user,
      EMAIL_PASS: mockEmailConfig.auth.pass,
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should send emails successfully', async () => {
    await expect(sendContactFormEmail(mockContactFormData)).resolves.not.toThrow();

    const transport = nodemailer.createTransport() as unknown as { sendMail: jest.Mock };
    expect(transport.sendMail).toHaveBeenCalledTimes(2); // Admin notification + User confirmation
  });

  it('should throw error when missing required environment variables', async () => {
    delete process.env.EMAIL_HOST;

    await expect(sendContactFormEmail(mockContactFormData)).rejects.toThrow(
      'Missing required environment variables'
    );
  });

  it('should use EMAIL_USER as admin email when ADMIN_EMAIL is not set', async () => {
    await sendContactFormEmail(mockContactFormData);

    const transport = nodemailer.createTransport() as unknown as { sendMail: jest.Mock };
    const adminCall = transport.sendMail.mock.calls[0][0];
    expect(adminCall.to).toBe(process.env.EMAIL_USER);
  });

  it('should use ADMIN_EMAIL when set', async () => {
    process.env.ADMIN_EMAIL = 'admin@test.com';
    await sendContactFormEmail(mockContactFormData);

    const transport = nodemailer.createTransport() as unknown as { sendMail: jest.Mock };
    const adminCall = transport.sendMail.mock.calls[0][0];
    expect(adminCall.to).toBe('admin@test.com');
  });

  it('should handle email sending errors', async () => {
    const error = new Error('SMTP error');
    (nodemailer.createTransport as jest.Mock).mockReturnValue({
      sendMail: jest.fn().mockRejectedValue(error),
    } as unknown as Transporter);

    await expect(sendContactFormEmail(mockContactFormData)).rejects.toThrow('Failed to send email');
  });
}); 