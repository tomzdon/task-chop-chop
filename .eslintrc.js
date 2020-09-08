module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,

    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "no-console": "off",
    "comma-dangle": ["warn", "always-multiline"],
    "react/jsx-filename-extension": "off",
    quotes: [2, "double", "avoid-escape"],
    semi: "off",
  },
};
