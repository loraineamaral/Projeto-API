module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
    'space-in-parens': [
        "error",
        "never"
    ],
    'padded-blocks': [
        "error",
        "never"
    ],
    'camelcase': 1,
    'id-length': [
        "error"
    ],
    'keyword-spacing': [
        'error',
        { "before": true }
    ],
    "space-infix-ops": [
        "error",
        {"int32Hint": false}
    ],
    "comma-spacing": [
        "error",
        { "before": false, "after": true }
    ],
    "space-before-blocks": [
        "error",
        "always"
    ],
    "spaced-comment": [
        "error",
        "always",
        { "exceptions": ["-", "+"] }
    ],
    "no-multi-spaces": [
        "error",
    ],
    "no-multiple-empty-lines":[
      "error",
      { "max": 2}
    ],
    "space-before-function-paren":[
        "error",
        "never"
    ],
    "func-call-spacing": [
        "error",
        "never"
    ],
    "no-floating-decimal": [
        "error"
    ],
    "object-property-newline": [
        "error"
    ],
    "brace-style": [
        "error"
    ],
    "eqeqeq": [
        "error",
        "always"
    ],
    "no-array-constructor":[
        "error",
    ],
}
};