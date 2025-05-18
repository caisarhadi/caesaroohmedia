import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import Button from './Button';

const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: { type: 'select' }, 
      options: ['primary', 'secondary', 'outline'],
    },
    size: { 
      control: { type: 'select' }, 
      options: ['small', 'medium', 'large'],
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary button with default settings
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify button exists and has correct text
    const button = canvas.getByRole('button', { name: /primary button/i });
    expect(button).toBeInTheDocument();
    
    // Test hover state
    await userEvent.hover(button);
    
    // Test focus state
    await userEvent.tab();
    expect(button).toHaveFocus();
    
    // Test click state
    await userEvent.click(button);
  },
};

/**
 * Secondary button
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

/**
 * Outline button
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

/**
 * Small button
 */
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

/**
 * Large button
 */
export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

/**
 * Loading button
 */
export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading Button',
  },
};

/**
 * Disabled button
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify button exists and is disabled
    const button = canvas.getByRole('button', { name: /disabled button/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    
    // Validate that clicking doesn't trigger action
    await userEvent.click(button, { skipHover: true });
  },
}; 