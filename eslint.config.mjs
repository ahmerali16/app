// eslint.config.mjs
export default {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
        "no-undef": "error"
    }
};