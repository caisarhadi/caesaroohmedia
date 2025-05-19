import { ContactFormData } from '@/services/formService';

// Mock contact form data
export const mockContactFormData: ContactFormData = {
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Test Subject',
  message: 'This is a test message',
};

// Mock successful API response
export const mockSuccessResponse = {
  data: { message: 'Success' },
  success: true,
};

// Mock error API response
export const mockErrorResponse = {
  data: null,
  error: 'An error occurred',
  success: false,
};

// Mock validation error response
export const mockValidationErrorResponse = {
  data: null,
  error: 'Validation failed',
  success: false,
};

// Mock email configuration for testing
export const mockEmailConfig = {
  host: 'test.smtp.com',
  port: 587,
  secure: false,
  auth: {
    user: 'test@example.com',
    pass: 'testpass',
  },
};

// Helper function to create mock Request object
export const createMockRequest = <T>(data: T) => {
  return {
    json: async () => data,
  } as Request;
};

// Helper function to mock fetch responses
export const mockFetchResponse = <T>(data: T, ok = true) => {
  return {
    ok,
    json: async () => data,
  } as Response;
};  