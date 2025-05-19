/**
 * Base API client wrapper for handling HTTP requests
 */

export type ApiResponse<T = any> = {
  data: T;
  error?: string;
  success: boolean;
};

export type ApiError = {
  message: string;
  status?: number;
};

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    if (!response.ok) {
      const error: ApiError = {
        message: 'An error occurred during the request',
        status: response.status,
      };

      try {
        const errorData = await response.json();
        error.message = errorData.message || error.message;
      } catch {
        // Use default error message if JSON parsing fails
      }

      return {
        data: null as T,
        error: error.message,
        success: false,
      };
    }

    const data = await response.json();
    return {
      data,
      success: true,
    };
  }

  async get<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });
      return this.handleResponse<T>(response);
    } catch (error) {
      return {
        data: null as T,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        success: false,
      };
    }
  }

  async post<T>(endpoint: string, data?: any, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
      });
      return this.handleResponse<T>(response);
    } catch (error) {
      return {
        data: null as T,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        success: false,
      };
    }
  }
}

// Create and export a default instance
export const apiClient = new ApiClient(); 