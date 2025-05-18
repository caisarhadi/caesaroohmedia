import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
import Card from './Card';
import Button from './Button';

const meta = {
  title: 'Common/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    withPadding: { control: 'boolean' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic card with content
 */
export const Basic: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-xl font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600 dark:text-gray-300">
          This is a basic card with some content. The content area has default padding applied.
        </p>
      </div>
    ),
  },
};

/**
 * Card with header and content
 */
export const WithHeader: Story = {
  args: {
    header: <h3 className="text-lg font-semibold">Card Header</h3>,
    children: (
      <p className="text-gray-600 dark:text-gray-300">
        This card has a header section that&apos;s separated from the content with a border.
      </p>
    ),
  },
};

/**
 * Card with footer and content
 */
export const WithFooter: Story = {
  args: {
    children: (
      <p className="text-gray-600 dark:text-gray-300">
        This card has a footer section that&apos;s separated from the content with a border.
      </p>
    ),
    footer: (
      <div className="flex justify-end">
        <Button variant="outline" size="small" className="mr-2">
          Cancel
        </Button>
        <Button size="small">Submit</Button>
      </div>
    ),
  },
};

/**
 * Card with header, content, and footer
 */
export const Complete: Story = {
  args: {
    header: <h3 className="text-lg font-semibold">Complete Card</h3>,
    children: (
      <div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This is a complete card example with header, content, and footer sections.
        </p>
        <div className="relative w-full h-48">
          <Image 
            loader={({ src }) => src}
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Sample"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">Last updated: Today</span>
        <Button size="small">View Details</Button>
      </div>
    ),
  },
};

/**
 * Card without padding
 */
export const NoPadding: Story = {
  args: {
    withPadding: false,
    children: (
      <div className="relative w-full h-64">
        <Image 
          loader={({ src }) => src}
          src="https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Sample"
          layout="fill"
          objectFit="cover"
        />
      </div>
    ),
  },
}; 