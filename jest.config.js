
// import type {Config} from 'jest';

// const config: Config = {
 
//   clearMocks: true,
//   coverageProvider: "v8",
//   moduleFileExtensions: [
//     "js",
//     "mjs",
//     "cjs",
//     "jsx",
//     "ts",
//     "tsx",
//     "json",
//     "node"
//   ],

//   testEnvironment: "jsdom",
//   testMatch: [
//     "**/__tests__/**/*.[jt]s?(x)",
//     "**/?(*.)+(spec|test).[tj]s?(x)"
//   ],

//   testPathIgnorePatterns: [
//     "\\\\node_modules\\\\"
//   ],

//   coverageReporters: [
//     "json",
//     "lcov",
//     "text",
//     "clover"
//   ],

//   collectCoverage: true,
//   coverageDirectory: "coverage",
//   collectCoverageFrom: [
//     "app/**/*.{js,jsx,ts,tsx}",
//     "!app/**/*.d.ts",
//     "!app/index.tsx",
//     "!app/serviceWorker.ts"
//   ],

//   roots: [
//     "<rootDir>/app"
//   ],

// };

// export default config;


const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
}
module.exports = createJestConfig(customJestConfig);



