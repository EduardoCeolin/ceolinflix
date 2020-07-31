module.exports = {
    env: {
        commonjs: true,
        browser: true,
        es6: true,
    },
    extends: ["plugin:react/recommended", "airbnb", "prettier"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jxs"] }],
    },
};
