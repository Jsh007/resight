module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
    'src/features/': {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
