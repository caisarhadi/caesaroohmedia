import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './Radio';

const meta = {
  title: 'Common/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { 
      control: { type: 'select' }, 
      options: ['small', 'medium', 'large'],
    },
    orientation: { 
      control: { type: 'select' }, 
      options: ['vertical', 'horizontal'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample options for the stories
const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
];

const paymentMethodOptions = [
  { value: 'credit-card', label: 'Credit Card' },
  { value: 'debit-card', label: 'Debit Card' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'bank-transfer', label: 'Bank Transfer', disabled: true },
];

/**
 * Basic radio group with options
 */
export const Default: Story = {
  args: {
    label: 'Gender',
    name: 'gender',
    options: genderOptions,
    value: 'male',
  },
};

/**
 * Radio group with hint text
 */
export const WithHint: Story = {
  args: {
    label: 'Gender',
    name: 'gender',
    options: genderOptions,
    value: 'male',
    hint: 'This information is used for demographic purposes only',
  },
};

/**
 * Radio group with error state
 */
export const WithError: Story = {
  args: {
    label: 'Payment Method',
    name: 'payment-method',
    options: paymentMethodOptions,
    error: 'Please select a payment method',
  },
};

/**
 * Required radio group
 */
export const Required: Story = {
  args: {
    label: 'Payment Method',
    name: 'payment-method',
    options: paymentMethodOptions,
    required: true,
  },
};

/**
 * Disabled radio group
 */
export const Disabled: Story = {
  args: {
    label: 'Payment Method',
    name: 'payment-method',
    options: paymentMethodOptions,
    disabled: true,
    value: 'credit-card',
  },
};

/**
 * Horizontal orientation
 */
export const Horizontal: Story = {
  args: {
    label: 'Gender',
    name: 'gender',
    options: genderOptions,
    orientation: 'horizontal',
  },
};

/**
 * Small radio buttons
 */
export const Small: Story = {
  args: {
    label: 'Gender',
    name: 'gender',
    options: genderOptions,
    size: 'small',
  },
};

/**
 * Large radio buttons
 */
export const Large: Story = {
  args: {
    label: 'Gender',
    name: 'gender',
    options: genderOptions,
    size: 'large',
  },
}; 