import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Add providers or context needed for tests here
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>; // Placeholder, wrap with actual providers
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render }; 