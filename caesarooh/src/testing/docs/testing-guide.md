# Testing Guide

This document provides guidelines and best practices for testing the CaesarOOH Media application.

## Testing Types

### Unit Testing

Unit tests focus on testing individual functions, components, or modules in isolation. They ensure that each piece of code works correctly on its own.

#### Running Unit Tests

```bash
npm run test        # Run all unit tests
npm run test:watch  # Run tests in watch mode (auto-rerun on file changes)
npm run test:coverage # Run tests with coverage report
```

#### Example Unit Test

See `src/testing/jest/lib/example.test.ts` for a basic example.

### Component Testing

Component tests verify that React components render correctly and respond appropriately to user interactions.

#### Example Component Test

See `src/testing/jest/components/common/ComponentExample.test.tsx` for a basic example.

### Integration Testing

Integration tests check that different parts of the application work correctly together. They focus on the interactions between components, functions, or modules.

#### Example Integration Test

See `src/testing/jest/components/integration.test.tsx` for a basic example.

### End-to-End (E2E) Testing

E2E tests validate complete user flows across the entire application, simulating real user behavior.

#### Running E2E Tests

```bash
npm run test:e2e     # Run all E2E tests
npm run test:e2e:ui  # Run E2E tests with UI mode for debugging
```

#### Example E2E Test

See `src/testing/e2e/example.spec.ts` for a basic example.

## Test Utilities

### Mock Service Worker (MSW)

MSW is used to mock API requests. See `src/testing/utils/msw/` for setup and examples.

### Store Mocking

Zustand store mocking utilities are available in `src/testing/utils/store/`.

### Render Utilities

Custom render functions with provider wrappers are available in `src/testing/utils/render.tsx`.

## Best Practices

1. **Write testable code**: Keep components and functions small with clear responsibilities.
2. **Test behavior, not implementation**: Focus on what the code does, not how it does it.
3. **Use meaningful assertions**: Make sure test failures provide clear information.
4. **Keep tests independent**: Each test should run independently without relying on other tests.
5. **Use test fixtures**: Reuse common setup code to keep tests DRY.
6. **Mock external dependencies**: Use MSW to mock API calls and isolate components for testing.
7. **Test edge cases**: Include tests for edge cases and error conditions.
8. **Maintain test coverage**: Aim for good coverage of critical functionality.

## Testing Checklist

- [ ] Unit tests for utility functions
- [ ] Component tests for UI behavior
- [ ] Integration tests for component interactions
- [ ] E2E tests for critical user flows
- [ ] API mocking for external dependencies
- [ ] Mock store for state management
- [ ] Test coverage meets project requirements

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Mock Service Worker](https://mswjs.io/docs/) 