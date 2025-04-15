# Cypress Test Suite

This directory contains end-to-end (E2E) tests for the ReflexAI Dashboard using Cypress.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- The ReflexAI Dashboard application running locally
  - Clone and set up the application from [ReflexAI/qa-eng-test](https://github.com/ReflexAI/qa-eng-test)
  - Follow the setup instructions in that repository
  - Ensure the application is running on http://localhost:3000 (default URL)

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Install Cypress (if not already installed):
```bash
npm install cypress --save-dev
# or
yarn add cypress --dev
```

## Configuration

The test suite is currently configured to run against `http://localhost:3000`. Once the project is deployed, you can update the base URL in the Cypress configuration to point to your deployed environment.

To modify the base URL:
1. Open `cypress.config.js`
2. Update the `baseUrl` property to your deployed application URL

## Project Structure

```
cypress/
├── e2e/
│   ├── pages/         # Page object models
│   │   └── dashboard.js
│   └── tests/         # Test files
│       └── dashboard.js
└── fixtures/          # Test data fixtures
```

### Pages
The `pages` directory contains page object models that encapsulate the behavior and selectors of different pages in the application. Each page object provides methods to interact with the page elements.

### Tests
The `tests` directory contains the actual test files. Tests are written using the page objects to interact with the application.

## Running Tests

### Open Cypress Test Runner
```bash
npx cypress open
```

### Run Tests in Headless Mode
```bash
npx cypress run
```

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/tests/dashboard.js"
```

## Writing Tests

1. Create a new page object in `cypress/e2e/pages/` if needed
2. Create a new test file in `cypress/e2e/tests/`
3. Import the required page objects
4. Write tests using Cypress commands and page object methods

Example test structure:
```javascript
import DashboardPage from '../pages/dashboard';

describe('Dashboard', () => {
    it('should load the dashboard page', () => {
        DashboardPage.visit();
        cy.url().should('eq', 'http://localhost:3000/');
    });
});
```

## Best Practices

1. Use page objects to encapsulate page-specific logic
2. Keep tests independent and isolated
3. Use meaningful test descriptions
4. Follow the DRY (Don't Repeat Yourself) principle
5. Use fixtures for test data when needed

## Troubleshooting

If you encounter issues:
1. Ensure the application is running on http://localhost:3000
2. Check the Cypress logs for error messages
3. Verify all dependencies are installed correctly
4. Clear the Cypress cache if needed: `npx cypress cache clear`

## Additional Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Page Object Pattern in Cypress](https://docs.cypress.io/guides/references/best-practices#Organizing-Tests-Logging-In-Controlling-State) 