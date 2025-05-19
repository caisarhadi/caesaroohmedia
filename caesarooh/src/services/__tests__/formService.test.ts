import { FormService, ValidationError } from '../formService';
import { mockContactFormData, mockSuccessResponse, mockErrorResponse } from '@/lib/__tests__/apiMocks';
import { apiClient } from '../apiClient';

// Mock the apiClient
jest.mock('../apiClient', () => ({
  apiClient: {
    post: jest.fn(),
  },
}));

describe('FormService', () => {
  let formService: FormService;

  beforeEach(() => {
    formService = new FormService();
    jest.clearAllMocks();
  });

  describe('validateContactForm', () => {
    it('should validate valid contact form data', () => {
      expect(() => formService.validateContactForm(mockContactFormData)).not.toThrow();
    });

    it('should throw ValidationError for invalid name', () => {
      const invalidData = { ...mockContactFormData, name: '' };
      expect(() => formService.validateContactForm(invalidData)).toThrow(ValidationError);
    });

    it('should throw ValidationError for invalid email', () => {
      const invalidData = { ...mockContactFormData, email: 'invalid-email' };
      expect(() => formService.validateContactForm(invalidData)).toThrow(ValidationError);
    });

    it('should throw ValidationError for short subject', () => {
      const invalidData = { ...mockContactFormData, subject: 'a' };
      expect(() => formService.validateContactForm(invalidData)).toThrow(ValidationError);
    });

    it('should throw ValidationError for short message', () => {
      const invalidData = { ...mockContactFormData, message: 'short' };
      expect(() => formService.validateContactForm(invalidData)).toThrow(ValidationError);
    });
  });

  describe('submitContactForm', () => {
    it('should submit valid form data successfully', async () => {
      (apiClient.post as jest.Mock).mockResolvedValue(mockSuccessResponse);

      const result = await formService.submitContactForm(mockContactFormData);
      expect(result).toEqual(mockSuccessResponse);
      expect(apiClient.post).toHaveBeenCalledWith('/contact', mockContactFormData);
    });

    it('should return validation error for invalid data', async () => {
      const invalidData = { ...mockContactFormData, email: 'invalid-email' };
      const result = await formService.submitContactForm(invalidData);

      expect(result.success).toBe(false);
      expect(result.error).toContain('valid email');
      expect(apiClient.post).not.toHaveBeenCalled();
    });

    it('should handle API errors', async () => {
      (apiClient.post as jest.Mock).mockResolvedValue(mockErrorResponse);

      const result = await formService.submitContactForm(mockContactFormData);
      expect(result).toEqual(mockErrorResponse);
    });
  });
}); 