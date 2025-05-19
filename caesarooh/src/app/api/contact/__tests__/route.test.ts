import { POST } from '../route';
import { sendContactFormEmail } from '@/lib/email';
import { mockContactFormData, createMockRequest } from '@/lib/__tests__/apiMocks';

// Mock the email sending function
jest.mock('@/lib/email', () => ({
  sendContactFormEmail: jest.fn(),
}));

describe('Contact API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle valid contact form submission', async () => {
    const request = createMockRequest(mockContactFormData);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Message sent successfully');
    expect(sendContactFormEmail).toHaveBeenCalledWith(mockContactFormData);
  });

  it('should return 400 for missing required fields', async () => {
    const invalidData = { ...mockContactFormData, email: undefined };
    const request = createMockRequest(invalidData);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.message).toBe('All fields are required');
    expect(sendContactFormEmail).not.toHaveBeenCalled();
  });

  it('should handle email sending errors', async () => {
    (sendContactFormEmail as jest.Mock).mockRejectedValue(new Error('Email error'));
    
    const request = createMockRequest(mockContactFormData);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.message).toBe('Failed to send message');
  });

  it('should handle invalid JSON in request', async () => {
    const request = {
      json: () => Promise.reject(new Error('Invalid JSON')),
    } as Request;

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.message).toBe('Failed to send message');
  });
}); 