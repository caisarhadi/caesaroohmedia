import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import ThemeProvider from '@/contexts/ThemeProvider';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen', // Footer is usually full width
    nextjs: {
      appDirectory: true,
      router: {
        pathname: '/', // Mock pathname for links
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}; 