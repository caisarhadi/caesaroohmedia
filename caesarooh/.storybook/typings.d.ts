declare module '@storybook/test-runner' {
  export interface TestContext {
    id: string;
    title: string;
    name: string;
    parameters: Record<string, any>;
    story: {
      id: string;
      name: string;
      tags?: string[];
      parameters?: Record<string, any>;
    };
  }

  export interface TestRunnerConfig {
    /**
     * Timeout for each story in milliseconds
     */
    timeout?: number;
    
    /**
     * Function to run before a story is visited
     */
    preVisit?: (page: any, context: TestContext) => Promise<void>;
    
    /**
     * Function to run after a story is visited
     */
    postVisit?: (page: any, context: TestContext) => Promise<void>;
    
    /**
     * Setup function to run before all tests
     */
    setup?: () => Promise<void>;
    
    /**
     * Teardown function to run after all tests
     */
    teardown?: () => Promise<void>;
  }
} 