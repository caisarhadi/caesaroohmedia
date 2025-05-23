import { http, HttpResponse } from 'msw';

// Define your MSW handlers here
export const handlers = [
  // Example: Mocking a GET request
  http.get('/api/user', () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
]; 