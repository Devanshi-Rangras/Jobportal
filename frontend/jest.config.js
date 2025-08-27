module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/", // allow axios to be transpiled
  ],
};
