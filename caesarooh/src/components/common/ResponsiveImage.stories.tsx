import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ResponsiveImage from './ResponsiveImage';

const meta: Meta<typeof ResponsiveImage> = {
  title: 'Common/ResponsiveImage',
  component: ResponsiveImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', description: 'Image source URL' },
    alt: { control: 'text', description: 'Image alt text' },
    fill: { control: 'boolean', description: 'Whether the image should fill its container' },
    width: { control: 'number', description: 'Image width (if not in fill mode)' },
    height: { control: 'number', description: 'Image height (if not in fill mode)' },
    priority: { control: 'boolean', description: 'Whether the image should be prioritized' },
    className: { control: 'text', description: 'Custom CSS classes' },
    sizes: { control: 'text', description: 'Image sizes attribute for responsive sources' },
    fallback: { control: 'object', description: 'React node to display on image error' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const placeholderUrl = (width: number, height: number, text: string = 'Placeholder') => 
  `https://via.placeholder.com/${width}x${height}.png?text=${encodeURIComponent(text)}`;

export const FixedSize: Story = {
  args: {
    src: placeholderUrl(300, 200, '300x200 Fixed'),
    alt: 'A placeholder image with fixed dimensions',
    width: 300,
    height: 200,
  },
};

export const FillMode: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '500px', height: '300px', border: '1px dashed grey', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    src: placeholderUrl(800, 600, 'Fill Mode'),
    alt: 'A placeholder image in fill mode',
    fill: true,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'https://example.com/non-existent-image.jpg', // Intentionally broken URL
    alt: 'An image that will fail to load',
    width: 300,
    height: 200,
    fallback: <div style={{ width: 300, height: 200, background: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Fallback UI</div>,
  },
};

export const WithClassName: Story = {
  args: {
    src: placeholderUrl(300, 200, 'Styled Image'),
    alt: 'A placeholder image with custom styles',
    width: 300,
    height: 200,
    className: 'rounded-lg shadow-xl border-4 border-blue-500',
  },
}; 