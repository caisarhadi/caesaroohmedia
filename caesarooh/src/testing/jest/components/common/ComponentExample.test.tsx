import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Simple Button component for testing
const Button = ({ label }: { label: string }) => {
  return <button>{label}</button>;
};

describe('Button Component', () => {
  it('renders with the provided label', () => {
    render(<Button label="Click Me" />);
    
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });
}); 