// @ts-check

/** @satisfies {import("lint-staged").Config} */
const config = {
  "{src,test}/**/*.{js,jsx,ts,tsx}": "eslint --fix --report-unused-disable-directives-severity error",
  "*.{js,cjs,mjs,ts,cts,mts}": "eslint --fix --report-unused-disable-directives-severity error",
  "src/**/*.{css,scss}": "stylelint --fix",
  "{src,test}/**/*.json": "prettier --loglevel=silent --write",
  "*.{json,md}": "prettier --loglevel=silent --write",
  ".hintrc": "prettier --loglevel=silent --write --parser json",
};

export default config;
