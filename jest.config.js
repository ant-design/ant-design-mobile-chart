module.exports = {
  setupFiles: [
    'jest-canvas-mock',
  ],
  collectCoverageFrom: ['<rootDir>/src/component/**/*.{js,jsx}', '<rootDir>/src/common/*.{js,jsx}'],
};
