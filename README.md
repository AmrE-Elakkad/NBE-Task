# NBE Task

For detailed documentation of Cypress and its related API references go here https://docs.cypress.io/guides/overview/why-cypress

This repo contains all the basic setup required to get started with Cypress for UI e2e automation. The tests are written in `Javascript` and project has the below files and folders defined so that a developer can start writing tests right away.

- `e2e` - All of the e2e tests goes here
- `pages` - The place to define the test components or user actions using the page-object pattern.

## Installation

- Install node

```
https://nodejs.org/en/
```

- Install npm

```
https://docs.npmjs.com/cli/v10/commands/npm-install
```

## Environment Setup

- Run npm to install the node packages

```
npm install
```

## Test Execution

To run the tests headless mode

```
npx cypress run
```

To run the tests in Cypress test runner (GUI)

```
npx cypress open
```


Cypress currently supports Firefox and Chrome-family browsers (including Edge and Electron). You can run on any of these browser as long as it is installed on your local machine.