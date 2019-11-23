const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "@typescript-eslint", "jsx-a11y", "prettier"],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier",
  ],
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    createDefaultProgram: true,
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  globals: {
    __dirname: true,
    module: true,
    BUILD_TYPE: true,
    TARGET_ENV_TYPE: true,
    API_BASE_URL: true,
  },
  overrides: [
    {
      files: ["*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "newline-after-var": "off",
      },
    },
  ],
  rules: {
    // "prettier/prettier": "error", // they claim this is needed, it brakes indentation
    // 👇🏻 Rules for hooks
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,

    // 👇🏻 `@typescript-eslint` overrides
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/ban-ts-ignore": 0,

    "no-undefined": 0,
    complexity: ["error", 10],
    "func-names": 0,
    "class-methods-use-this": 0,

    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/sort-comp": [
      2,
      {
        order: [
          "static-methods",
          "instance-variables",
          "getters",
          "setters",
          "lifecycle",
          "everything-else",
          "rendering",
        ],
        groups: {
          rendering: ["render", "/^render.+$/"],
        },
      },
    ],
    "react/require-optimization": 0,

    // tsc already catches these kind of errors
    "no-undef": 0,

    "react/jsx-max-props-per-line": [2, {maximum: 1, when: "always"}],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    indent: ["error", 2],
  },
};
