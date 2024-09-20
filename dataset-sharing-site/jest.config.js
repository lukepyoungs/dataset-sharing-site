module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest", // Transform JavaScript and JSX using Babel
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(axios)/)", // Add axios to the list of modules to transform
    ],
    testEnvironment: "jsdom", // Ensure the right test environment for React components
  };