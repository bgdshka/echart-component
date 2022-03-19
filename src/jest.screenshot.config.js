module.exports = {
  testEnvironment: "node",
  globalSetup: "react-screenshot-test/global-setup",
  globalTeardown: "react-screenshot-test/global-teardown",
  testMatch: ["**/?(*.)+(screenshot).[jt]s?(x)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/src/assetsTransformer.js",
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // or ts-jest
    "^.+\\.module\\.css$": "react-screenshot-test/css-modules-transform",
    "^.+\\.css$": "react-screenshot-test/css-transform",
    "^.+\\.scss$": "react-screenshot-test/sass-transform",
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "react-screenshot-test/asset-transform",
  },
  transformIgnorePatterns: ["node_modules/.+\\.js"],
  rootDir: "../",
};
