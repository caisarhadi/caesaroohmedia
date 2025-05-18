import type { Meta, StoryObj } from '@storybook/react';
import Select, { SelectOption, SelectOptionGroup } from './Select';

const meta = {
  title: 'Common/Select',
  component: Select,
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
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample options for the stories
const countries: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'br', label: 'Brazil' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'it', label: 'Italy' },
];

const continents: SelectOptionGroup[] = [
  {
    label: 'North America',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'mx', label: 'Mexico' },
    ],
  },
  {
    label: 'South America',
    options: [
      { value: 'br', label: 'Brazil' },
      { value: 'ar', label: 'Argentina' },
      { value: 'co', label: 'Colombia' },
    ],
  },
  {
    label: 'Europe',
    options: [
      { value: 'uk', label: 'United Kingdom' },
      { value: 'fr', label: 'France' },
      { value: 'de', label: 'Germany' },
      { value: 'it', label: 'Italy' },
      { value: 'es', label: 'Spain' },
    ],
  },
];

/**
 * Basic select with options
 */
export const Default: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
  },
};

/**
 * Select with option groups
 */
export const WithGroups: Story = {
  args: {
    label: 'Country',
    options: continents,
    placeholder: 'Select a country',
  },
};

/**
 * Select with hint text
 */
export const WithHint: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    hint: 'Please select your country of residence',
  },
};

/**
 * Select with error state
 */
export const WithError: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    error: 'Please select a valid country',
  },
};

/**
 * Required select
 */
export const Required: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    required: true,
  },
};

/**
 * Disabled select
 */
export const Disabled: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    disabled: true,
  },
};

/**
 * Small select
 */
export const Small: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    size: 'small',
  },
};

/**
 * Large select
 */
export const Large: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    size: 'large',
  },
}; 