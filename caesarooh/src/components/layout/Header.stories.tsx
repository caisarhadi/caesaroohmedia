import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { create, StoreApi } from 'zustand';
import Header from './Header';
import ThemeProvider from '@/contexts/ThemeProvider';

// Mock store state type
export interface MockUIState {
  theme: 'light' | 'dark' | 'system';
  isHeaderFixed: boolean;
  isDrawerOpen: boolean;
  activeModal: string | null;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  setHeaderFixed: (isFixed: boolean) => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

// Create a mock store with default values
const createMockStore = (initialState: Partial<MockUIState> = {}): StoreApi<MockUIState> => {
  const mockFn = () => {};

  const defaultState: MockUIState = {
    theme: 'light',
    isHeaderFixed: false,
    isDrawerOpen: false,
    activeModal: null,
    setTheme: mockFn,
    openDrawer: mockFn,
    closeDrawer: mockFn,
    toggleDrawer: mockFn,
    setHeaderFixed: mockFn,
    openModal: mockFn,
    closeModal: mockFn,
    ...initialState,
  };

  return create<MockUIState>()(() => defaultState);
};

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  decorators: [
    (Story, { parameters = {} }) => {
      const storyStore = createMockStore(parameters.uiStore || {});
      
      // Mock the useUIStore for the story context
      if (typeof window !== 'undefined') {
        window.useUIStore = storyStore;
      }

      return (
        <ThemeProvider>
          <div className="sb-main">
            <Story />
          </div>
        </ThemeProvider>
      );
    }
  ],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      router: {
        pathname: '/',
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

export const FixedHeader: Story = {
  parameters: {
    uiStore: {
      isHeaderFixed: true,
    },
  },
  args: {},
};

export const DrawerOpen: Story = {
  parameters: {
    uiStore: {
      isDrawerOpen: true,
    },
    nextjs: {
      appDirectory: true,
      router: {
        pathname: '/about-us',
      },
    },
  },
  args: {},
};

export const MobileViewOldMenuOpen: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    uiStore: {
      isDrawerOpen: false,
    },
    nextjs: {
      appDirectory: true,
      router: {
        pathname: '/',
      },
    },
  },
  args: {},
}; 