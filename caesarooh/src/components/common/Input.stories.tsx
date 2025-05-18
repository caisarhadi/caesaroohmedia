import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import Input from './Input';
import Icon from './Icon';

const meta = {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { 
      control: { type: 'select' }, 
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic text input
 */
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Find input by its label
    const input = canvas.getByLabelText(/email/i);
    expect(input).toBeInTheDocument();
    
    // Test focus and typing
    await userEvent.click(input);
    expect(input).toHaveFocus();
    
    // Type a value
    await userEvent.type(input, 'test@example.com');
    expect(input).toHaveValue('test@example.com');
  },
};

/**
 * Input with hint text
 */
export const WithHint: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    hint: 'Password must be at least 8 characters',
  },
};

/**
 * Input with error state
 */
export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Find input and verify its value
    const input = canvas.getByLabelText(/email/i);
    expect(input).toHaveValue('invalid-email');
    
    // Verify error message is displayed
    const errorMessage = canvas.getByText('Please enter a valid email address');
    expect(errorMessage).toBeInTheDocument();
    
    // Input should have aria-invalid attribute
    expect(input).toHaveAttribute('aria-invalid', 'true');
  },
};

/**
 * Required input
 */
export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
  },
};

/**
 * Disabled input
 */
export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    disabled: true,
    value: 'johndoe',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Find input and verify it's disabled
    const input = canvas.getByLabelText(/username/i);
    expect(input).toBeDisabled();
  },
};

/**
 * Small input
 */
export const Small: Story = {
  args: {
    label: 'API Key',
    placeholder: 'Enter API key',
    size: 'small',
  },
};

/**
 * Large input
 */
export const Large: Story = {
  args: {
    label: 'Search',
    placeholder: 'Enter search term',
    size: 'large',
  },
};

/**
 * Input with icon
 */
export const WithIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    startIcon: <Icon name="search" size="small" />,
  },
};

/**
 * Input with end icon
 */
export const WithEndIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    endIcon: <Icon name="info" size="small" />,
  },
}; 