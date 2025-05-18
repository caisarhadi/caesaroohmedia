import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
  title: 'Common/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { 
      control: { type: 'select' }, 
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic checkbox with label
 */
export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

/**
 * Checkbox with hint text
 */
export const WithHint: Story = {
  args: {
    label: 'Subscribe to newsletter',
    hint: 'You can unsubscribe at any time',
  },
};

/**
 * Checkbox with error state
 */
export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: 'You must accept the terms to continue',
  },
};

/**
 * Checked checkbox
 */
export const Checked: Story = {
  args: {
    label: 'Remember me',
    checked: true,
  },
};

/**
 * Disabled checkbox
 */
export const Disabled: Story = {
  args: {
    label: 'Premium feature',
    disabled: true,
  },
};

/**
 * Small checkbox
 */
export const Small: Story = {
  args: {
    label: 'Small checkbox',
    size: 'small',
  },
};

/**
 * Large checkbox
 */
export const Large: Story = {
  args: {
    label: 'Large checkbox',
    size: 'large',
  },
}; 