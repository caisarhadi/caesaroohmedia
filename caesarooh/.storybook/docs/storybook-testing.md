# Storybook Visual Testing

This project uses Storybook's built-in test runner to perform visual testing on components.

## How it Works

Storybook Test Runner executes tests based on the stories in your Storybook. It works as follows:

1. Each story serves as a test case
2. The test runner renders the story in a canvas
3. Captures screenshots for both light and dark themes
4. Runs interaction tests specified in the `play` function

## Testing Features

- **Visual Regression Testing**: Automatically captures screenshots for comparison between builds
- **Interaction Testing**: Simulates user interactions like clicks, typing, and keyboard navigation
- **Accessibility Testing**: Tests accessibility properties (ARIA attributes, keyboard navigation)
- **Theme Testing**: Tests all components in both light and dark themes

## Writing Tests

You can add tests to your stories using the `play` function. For example:

```tsx
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Find elements
    const button = canvas.getByRole('button', { name: /primary button/i });
    
    // Test interactions
    await userEvent.hover(button);
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.click(button);
  },
};
```

## Running Tests

To run the tests, use the following npm scripts:

- `npm run test-storybook`: Run tests once (requires Storybook server to be running)
- `npm run test-storybook:watch`: Run tests in watch mode (re-runs on file changes)
- `npm run test-storybook:coverage`: Run tests with coverage reporting
- `npm run test-storybook:ci`: Run tests in CI mode (with different settings for CI environments)
- `npm run test-storybook:all`: Run tests with automatic Storybook server start and shutdown (best for CI)

### Testing in CI Environments

For CI environments, use the `test-storybook:all` script which will:

1. Start a Storybook server in CI mode
2. Wait for the server to be ready
3. Run the tests
4. Shut down the server

## Skipping Tests

To skip visual tests for a specific story, add the `no-snapshot` tag:

```tsx
export const ComplexAnimation: Story = {
  parameters: {
    tags: ['no-snapshot'], // Skip snapshot testing for this story
  },
  args: {
    // ...
  },
};
```

## Configuration

The test configuration is in `.storybook/test-runner.js`. It includes:

- Screenshot capture for both light and dark themes
- Timeout settings
- Screenshot naming conventions

## Screenshot Storage

Screenshots are stored in the `__snapshots__` directory at the root of the project. These can be used for visual regression testing by comparing the screenshots between runs. 