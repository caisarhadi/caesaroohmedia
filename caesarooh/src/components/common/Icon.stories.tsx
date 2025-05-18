import type { Meta, StoryObj } from '@storybook/react';
import Icon, { IconName } from './Icon';

const meta = {
  title: 'Common/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { 
      control: { type: 'select' }, 
      options: [
        'arrow-left',
        'arrow-right',
        'check',
        'close',
        'menu',
        'search',
        'user',
        'info',
        'warning',
        'error',
        'success',
      ],
    },
    size: { 
      control: { type: 'select' }, 
      options: ['small', 'medium', 'large'],
    },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default icon - medium check icon
 */
export const Default: Story = {
  args: {
    name: 'check',
  },
};

/**
 * Small icon
 */
export const Small: Story = {
  args: {
    name: 'check',
    size: 'small',
  },
};

/**
 * Large icon
 */
export const Large: Story = {
  args: {
    name: 'check',
    size: 'large',
  },
};

/**
 * Custom color icon
 */
export const CustomColor: Story = {
  args: {
    name: 'info',
    color: '#3B82F6',
  },
};

/**
 * All icons
 */
export const AllIcons: Story = {
  args: {
    name: 'check', // Default args to satisfy the type
  },
  render: (args) => {
    const icons: IconName[] = [
      'arrow-left',
      'arrow-right',
      'check',
      'close',
      'menu',
      'search',
      'user',
      'info',
      'warning',
      'error',
      'success',
    ];
    
    return (
      <div className="grid grid-cols-4 gap-4">
        {icons.map((iconName) => (
          <div key={iconName} className="flex flex-col items-center gap-2 p-4 border rounded">
            <Icon name={iconName} size={args.size} color={args.color} />
            <span className="text-sm">{iconName}</span>
          </div>
        ))}
      </div>
    );
  },
}; 