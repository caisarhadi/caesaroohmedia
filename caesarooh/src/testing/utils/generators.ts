// Placeholder for test data generators
export const generateUserData = (overrides?: Record<string, unknown>) => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  ...overrides,
}); 