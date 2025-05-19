# Testing Patterns and Examples

This document provides examples of common testing patterns used in the CaesarOOH Media application.

## Unit Testing Patterns

### Testing Pure Functions

```typescript
// Function to test
function sum(a: number, b: number): number {
  return a + b;
}

// Test
describe('sum', () => {
  it('adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-1, 1)).toBe(0);
  });
});
```

### Testing Asynchronous Functions

```typescript
// Async function to test
async function fetchData() {
  return Promise.resolve({ data: 'test' });
}

// Test
describe('fetchData', () => {
  it('resolves with data', async () => {
    const result = await fetchData();
    expect(result).toEqual({ data: 'test' });
  });
});
```

## Component Testing Patterns

### Testing Rendering

```tsx
// Component to test
function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

// Test
describe('Greeting', () => {
  it('renders correctly', () => {
    render(<Greeting name="World" />);
    expect(screen.getByRole('heading')).toHaveTextContent('Hello, World!');
  });
});
```

### Testing User Interactions

```tsx
// Component to test
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p data-testid="count">{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Test
describe('Counter', () => {
  it('increments count when button is clicked', () => {
    render(<Counter />);
    
    fireEvent.click(screen.getByText('Increment'));
    
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });
});
```

## API Mocking Patterns

### Mocking REST API with MSW

```tsx
// Component that uses API
function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);
  
  if (!user) return <p>Loading...</p>;
  
  return <div data-testid="user-name">{user.name}</div>;
}

// Test with MSW
import { http, HttpResponse } from 'msw';
import { server } from '../../utils/msw/server'; // Updated path

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserProfile', () => {
  it('displays user data after fetching', async () => {
    // Override handler for this test
    server.use(
      http.get('/api/users/123', () => {
        return HttpResponse.json({ name: 'John Doe' });
      })
    );
    
    render(<UserProfile userId="123" />);
    
    // Wait for the data to load
    expect(await screen.findByTestId('user-name')).toHaveTextContent('John Doe');
  });
});
```

## Store Mocking Patterns

### Mocking Zustand Store

```tsx
// Component that uses Zustand store
function TodoCounter() {
  const todos = useTodoStore(state => state.todos);
  return <div>Todo count: {todos.length}</div>;
}

// Test with store mock
import { createMockStore } from '../../utils/store'; // Updated path

describe('TodoCounter', () => {
  it('displays correct todo count', () => {
    // Mock the store
    const mockTodos = [{ id: 1, text: 'Test', completed: false }];
    const useMockTodoStore = createMockStore({ todos: mockTodos });
    
    // Replace the real store with the mock for this test
    // Note: The path '../../store/todo' is an example and should point to your actual store.
    jest.mock('../../store/todo', () => ({
      useTodoStore: useMockTodoStore
    }));
    
    render(<TodoCounter />);
    
    expect(screen.getByText('Todo count: 1')).toBeInTheDocument();
  });
});
```

## E2E Testing Patterns

### Testing Navigation

```typescript
// E2E test for navigation
test('user can navigate to about page', async ({ page }) => {
  await page.goto('/');
  
  // Find and click the link
  await page.getByRole('link', { name: 'About' }).click();
  
  // Check the URL changed
  await expect(page).toHaveURL('/about');
  
  // Verify content on the new page
  await expect(page.getByRole('heading', { level: 1 })).toContainText('About Us');
});
```

### Testing Forms

```typescript
// E2E test for form submission
test('contact form submits successfully', async ({ page }) => {
  await page.goto('/contact');
  
  // Fill out the form
  await page.getByLabel('Name').fill('John Doe');
  await page.getByLabel('Email').fill('john@example.com');
  await page.getByLabel('Message').fill('Hello, world!');
  
  // Submit the form
  await page.getByRole('button', { name: 'Submit' }).click();
  
  // Check for success message
  await expect(page.getByText('Thank you for your message!')).toBeVisible();
});
```

## Integration Testing Patterns

### Testing Component Interactions

```tsx
// Parent and child components
function Parent() {
  const [message, setMessage] = useState('');
  
  return (
    <div>
      <Child onMessage={setMessage} />
      <p data-testid="message">{message}</p>
    </div>
  );
}

function Child({ onMessage }: { onMessage: (msg: string) => void }) {
  return <button onClick={() => onMessage('Hello from child')}>Send</button>;
}

// Integration test
describe('Parent and Child integration', () => {
  it('updates parent state when child event is triggered', () => {
    render(<Parent />);
    
    // Initially, no message
    expect(screen.getByTestId('message')).toHaveTextContent('');
    
    // Trigger the child component
    fireEvent.click(screen.getByText('Send'));
    
    // Check that parent received the message
    expect(screen.getByTestId('message')).toHaveTextContent('Hello from child');
  });
});
```

These patterns and examples should help guide the implementation of tests for the CaesarOOH Media application. Adapt and expand them as needed for specific use cases. 