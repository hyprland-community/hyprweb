module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    extraFileExtensions: [".svelte"],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    "no-unused-vars": ["off", { varsIgnorePattern: ".*" }],
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-array-callback-reference": "off",
  },
  globals: { globalThis: true },

  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],
}
