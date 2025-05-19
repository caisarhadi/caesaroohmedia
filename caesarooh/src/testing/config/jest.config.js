const nextJest = require('next/jest')

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './', // This should still point to the Next.js root (caesarooh/)
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/src/testing/config/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases
    '^@/(.*)$': '<rootDir>/src/$1', // <rootDir> is caesarooh, so this maps to caesarooh/src/
  },
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'], // <rootDir> is caesarooh
  // Specify test files pattern
  testMatch: [
    '<rootDir>/src/testing/jest/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  // Set the root directory for Jest to correctly resolve <rootDir>
  // This ensures <rootDir> in other paths refers to the project root (caesarooh/)
  // Since the config file is now in src/testing/config/, we need to go up three levels.
  // However, Jest's <rootDir> is usually the directory containing the Jest config OR the package.json.
  // If we run jest with --config, <rootDir> is the dir of package.json. If we run jest from root, it's root.
  // The `dir: './'` for nextJest is for Next.js's config loading, not Jest's <rootDir> directly.
  // Let's rely on running Jest from the `caesarooh` directory with `package.json`.
  // So, <rootDir> will correctly be `caesarooh`.
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig) 