module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
  },
  "extends": ["eslint-config-airbnb"],
  "plugins": [
    'react',
    'babel',
  ],
  "rules": {
    "no-plusplus": 0,
    "max-len": [1, 130],
    "no-console": 0,
    "linebreak-style": [2, "unix"],
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "arrow-body-style": 0,
    "react/prop-types": 0,
    "guard-for-in": 0,
    "no-restricted-syntax": 0,
    "react/no-string-refs": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/newline-after-import": 0,
    "import/no-unresolved": [2, { ignore: ['^react$'] }],
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0
  }
};