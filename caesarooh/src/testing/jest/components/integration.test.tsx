import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Simple Counter component for integration testing
const Counter = () => {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

describe('Counter Component Integration', () => {
  it('increments the count when the increment button is clicked', () => {
    render(<Counter />);
    
    // Initial state
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
    
    // Click increment button
    fireEvent.click(screen.getByText('Increment'));
    
    // Check updated state
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 1');
  });
  
  it('decrements the count when the decrement button is clicked', () => {
    render(<Counter />);
    
    // Initial state
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
    
    // Click decrement button
    fireEvent.click(screen.getByText('Decrement'));
    
    // Check updated state
    expect(screen.getByTestId('count')).toHaveTextContent('Count: -1');
  });
}); 