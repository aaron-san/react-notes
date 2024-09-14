## Deploy to Github Pages

```shell
npm run predeploy
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages
```

# Console output after running 'npm run predeploy':

> ```
>    Some chunks are larger than 500 kB after minification. Consider:
>       - Using dynamic import() to code-split the application
> ```

## Set up Testing

Jest is not compatible out-of-the-box in TypeScript or Vite, so must install:

```shell
npm i -D vitest
npm i -D jsdom
npm i -D @testing-library/react
npm i -D @testing-library/jest-dom

```

Enable HTML in Vitest with jsdom

Add script in package.json:
"test": "vitest"

Need to wrap components in tests in the <BrowserRouter></BrowserRouter> tags for them to run.

For example:

```js
<BrowserRouter>
  render(
  <Item item={storyOne} />
  ); screen.debug();
</BrowserRouter>
```

---

```shell
npm install --save-dev jest
npm install --save-dev @babel/preset-env @babel/preset-react
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install ts-jest @types/jest --save-dev
npm install ts-node @types/testing-library/jest-dom --save-dev
npm install jest-environment-jsdom
npm install identity-obj-proxy --save-dev

npm uninstall jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest @types/jest ts-node @types/testing-library/jest-dom jest-environment-jsdom identity-obj-proxy
```

**Notes**
Babel presets for environment and React are essential for transpiling JavaScript and JSX code, ensuring compatibility across different environments.

@testing-library/react provides utilities for testing React components, while @testing-library/jest-dom adds custom Jest matchers for asserting on DOM elements.

ts-jest is a TypeScript preprocessor for Jest, enabling the testing of TypeScript code. @types/jest provides TypeScript type definitions for Jest.

ts-node is required for running TypeScript files directly in Node.js. @types/testing-library/jest-dom provides TypeScript type definitions for Jest DOM.

jest-environment-jsdom is a Jest environment for running tests in a simulated DOM environment. It ensures that your React components can be tested in a realistic browser-like environment.

identity-obj-proxy is a simple utility for creating identity-based proxies. In the context of Jest, it is often used to mock CSS modules.
