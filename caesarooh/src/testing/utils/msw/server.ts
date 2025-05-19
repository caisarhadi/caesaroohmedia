import { setupServer } from 'msw/node';
import { type HttpHandler } from 'msw'; // http import removed as it's not used now

// Define an empty array of handlers for now - restore import later
const handlers: HttpHandler[] = [];

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers); 