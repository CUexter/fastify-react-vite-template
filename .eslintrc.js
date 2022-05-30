module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "tsconfig.json",
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    "/*.*",
    "dist",
    "client/*.*",
    "server/*.*",
    ".github/*",
    "release",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/function-component-definition": [
      1,
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": 0,
    "no-underscore-dangle": ["error", { allow: ["_id", "__v", "_update"] }],
    "@typescript-eslint/naming-convention": [
      "warn",
      // {
      //   custom: {
      //     regex: "^_id|^__v|^_update",
      //     match: true,
      //   },
      // },
    ],
  },
  overrides: [
    {
      files: ["**/*{.,_}{test,spec,mock}.{js,jsx,tsx,ts}"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
