module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
  },
  rules: {},
};
