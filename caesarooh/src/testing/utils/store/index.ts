import { create, StoreApi, UseBoundStore } from 'zustand';

// This is a generic type for a Zustand store. Replace with your actual store type.
interface GenericState {
  [key: string]: any;
}

/**
 * Creates a mock Zustand store with an initial state.
 * You might need to adapt this based on your actual store implementation,
 * especially if you use middleware.
 */
export const createMockStore = <T extends GenericState>(
  initialState: T
): UseBoundStore<StoreApi<T>> => {
  return create<T>(() => initialState);
};

// Example of how you might reset all stores if you have a central registry
// or a known set of stores. This is highly dependent on your app's store structure.
export const resetAllStores = () => {
  // For each store:
  // store.setState(initialStateForTheStore, true); // The `true` replaces the entire state
  console.warn(
    'Global store reset is not implemented by default. Implement if needed.'
  );
};

/**
 * Example of how to mock a specific action in a Zustand store slice using Jest.
 * This is a pattern rather than a direct utility.
 *
 * ```ts
 * // __tests__/myStore.test.ts
 * import { myStoreAction } from '../myStore'; // Assuming action is exported
 * import { useMyStore } from '../myStore';
 *
 * jest.mock('../myStore', () => ({
 *   ...jest.requireActual('../myStore'), // Import and retain default behavior
 *   myStoreAction: jest.fn(), // Mock the specific action
 * }));
 *
 * describe('MyComponent using MyStore', () => {
 *   it('should call myStoreAction on button click', () => {
 *     render(<MyComponent />);
 *     fireEvent.click(screen.getByText('Trigger Action'));
 *     expect(myStoreAction).toHaveBeenCalled();
 *   });
 * });
 * ```
 */
export const MOCK_ACTION_PATTERN_COMMENT = true; 