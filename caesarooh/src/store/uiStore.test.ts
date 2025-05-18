import useUIStore from './uiStore';

// Helper to reset store before each test
const originalState = useUIStore.getState();

beforeEach(() => {
  useUIStore.setState(originalState, true);
});

describe('useUIStore drawer state', () => {
  it('should have isDrawerOpen initially as false', () => {
    const { isDrawerOpen } = useUIStore.getState();
    expect(isDrawerOpen).toBe(false);
  });

  it('openDrawer should set isDrawerOpen to true', () => {
    useUIStore.getState().openDrawer();
    const { isDrawerOpen } = useUIStore.getState();
    expect(isDrawerOpen).toBe(true);
  });

  it('closeDrawer should set isDrawerOpen to false', () => {
    // Open it first
    useUIStore.getState().openDrawer();
    expect(useUIStore.getState().isDrawerOpen).toBe(true);

    // Then close it
    useUIStore.getState().closeDrawer();
    const { isDrawerOpen } = useUIStore.getState();
    expect(isDrawerOpen).toBe(false);
  });

  it('toggleDrawer should invert isDrawerOpen state', () => {
    // Initial state is false, toggle to true
    useUIStore.getState().toggleDrawer();
    expect(useUIStore.getState().isDrawerOpen).toBe(true);

    // State is true, toggle to false
    useUIStore.getState().toggleDrawer();
    expect(useUIStore.getState().isDrawerOpen).toBe(false);
  });

  it('openDrawer should keep isDrawerOpen true if already true', () => {
    useUIStore.getState().openDrawer(); // drawer is open
    useUIStore.getState().openDrawer(); // call openDrawer again
    expect(useUIStore.getState().isDrawerOpen).toBe(true);
  });

  it('closeDrawer should keep isDrawerOpen false if already false', () => {
    // drawer is initially false
    useUIStore.getState().closeDrawer(); // call closeDrawer
    expect(useUIStore.getState().isDrawerOpen).toBe(false);
  });
}); 