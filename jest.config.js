/* eslint-disable no-undef */
module.exports = {
  transform: {
    '^.+\\.(tsx?|jsx?)?$': 'esbuild-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss|png|jpg|jpeg|webp)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.storybook/'],
  testEnvironment: 'jsdom',
}
