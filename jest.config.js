module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  cacheDirectory: '.jest/cache',
  globals: {
    navigator: {},
    'ts-jest': {
      babelConfig: true,
    },
    window: {},
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/ImageMock.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/packages/'],
  preset: 'react-native',
  setupFiles: [
    './jest.setup.js',
  ],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native|react-native-vector-icons)).*/',
  ],
};
