export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // Simulate a browser environment
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Setup file
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
      '\\.(svg)$': '<rootDir>/__mocks__/fileMock.js',
      // You can add other file types like .css, .jpg if needed
    },
  };