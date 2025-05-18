import type { Meta, StoryObj } from '@storybook/react';
import DrawerNavigation from './DrawerNavigation';
import useUIStore from '../../store/uiStore';
import Button from '../common/Button';
import React, { useEffect } from 'react';

const OriginalUIStoreState = useUIStore.getState();

interface DrawerNavigationStoryArgs {
  initialState?: 'open' | 'closed';
}

const meta: Meta<typeof DrawerNavigation & DrawerNavigationStoryArgs> = {
  title: 'Layout/DrawerNavigation',
  component: DrawerNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The DrawerNavigation component provides a slide-out navigation menu, primarily for mobile and smaller screen sizes. It uses GSAP for animations and Zustand for state management. The drawer can be opened and closed, and its state is managed globally. Navigation links highlight the active route. Accessibility features like keyboard navigation (Escape to close, Tab trapping) and ARIA attributes are implemented.',
      },
    },
  },
  argTypes: {
    initialState: {
      control: 'radio',
      options: ['closed', 'open'],
      description: 'Set the initial state of the drawer for the story',
      table: {
        category: 'Story Controls',
      },
      defaultValue: 'closed',
    },
  },
  decorators: [
    (Story, { args }: { args: DrawerNavigationStoryArgs }) => {
      useEffect(() => {
        useUIStore.setState(OriginalUIStoreState, true);
        if (args.initialState === 'open') {
          useUIStore.getState().openDrawer();
        } else if (args.initialState === 'closed') {
          useUIStore.getState().closeDrawer();
        } else {
          useUIStore.getState().closeDrawer();
        }
        return () => {
          useUIStore.getState().closeDrawer();
          useUIStore.setState(OriginalUIStoreState, true);
        };
      }, [args.initialState]);

      return (
        <div>
          <Story />
          <div style={{ padding: '1rem', position: 'absolute', top: '10px', left: '280px', zIndex: 100 }}>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Simulate interactions:</p>
            <Button onClick={() => useUIStore.getState().openDrawer()} variant="outline" size="small" className="mr-2">Open Drawer</Button>
            <Button onClick={() => useUIStore.getState().closeDrawer()} variant="outline" size="small">Close Drawer</Button>
            <Button onClick={() => useUIStore.getState().toggleDrawer()} variant="outline" size="small" className="ml-2">Toggle Drawer</Button>
          </div>
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default (Closed)',
  args: {
    initialState: 'closed',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default view of the DrawerNavigation. It is initially closed. Use the controls (radio button above or buttons here) to open/close it.',
      },
    },
  },
};

export const OpenByDefault: Story = {
  name: 'Open by Default',
  args: {
    initialState: 'open',
  },
  parameters: {
    docs: {
      description: {
        story: 'DrawerNavigation shown in its open state by default. This demonstrates the initial open appearance and animation.',
      },
    },
  },
};

// To-do: Add more stories if there are specific internal states or variations to document,
// e.g., with different navigation items if that becomes a prop.
// For now, the primary states are open and closed, managed via the store.

// Animation options are documented within the component code and GSAP utilities (gsap-utils.ts).
// The primary animations are slide-in/out for the drawer and fade-in/out for the backdrop.
// These are orchestrated by `openDrawerAnimation` and `closeDrawerAnimation` from `gsap-utils.ts`. 