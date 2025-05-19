import { apiClient, ApiResponse } from './apiClient';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class FormService {
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateContactForm(data: ContactFormData): void {
    if (!data.name || data.name.trim().length < 2) {
      throw new ValidationError('Name must be at least 2 characters long');
    }

    if (!data.email || !this.validateEmail(data.email)) {
      throw new ValidationError('Please provide a valid email address');
    }

    if (!data.subject || data.subject.trim().length < 3) {
      throw new ValidationError('Subject must be at least 3 characters long');
    }

    if (!data.message || data.message.trim().length < 10) {
      throw new ValidationError('Message must be at least 10 characters long');
    }
  }

  async submitContactForm(data: ContactFormData): Promise<ApiResponse> {
    try {
      // Validate form data before submission
      this.validateContactForm(data);

      // Submit form data to the API
      const response = await apiClient.post<{ message: string }>('/contact', data);
      return response;
    } catch (error) {
      if (error instanceof ValidationError) {
        return {
          data: null,
          error: error.message,
          success: false,
        };
      }
      return {
        data: null,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        success: false,
      };
    }
  }
}

// Create and export a default instance
export const formService = new FormService(); 