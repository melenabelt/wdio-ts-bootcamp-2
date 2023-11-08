# WebdriverIO (WDIO) Project

This is a test automation project using WebdriverIO (WDIO). This project is configured to run tests using the `npm run test` script.

## Prerequisites

Before running the tests, make sure you have Node.js and NPM installed on your system. You can download and install them from [Node.js](https://nodejs.org/).

## Setup

1. Clone this repository to your system:

   ```shell
   git clone https://github.com/melenabelt/wdio-ts-bootcamp-2/
   ```

2. Navigate to the project directory:

   ```shell
   cd DIRECTORY_NAME
   ```

3. Install project dependencies:

   ```shell
   npm install
   ```

## Running the Tests

Before running the tests, make sure you have Node.js and NPM installed on your system. You can download and install them from [Node.js](https://nodejs.org/).

```shell
npm run test
```

This command will perform the following actions before running the tests:

Clear previous test results.
Remove the previous Allure report.
Delete previous test screenshots.
Clean up previous WDIO logs.
It will then execute the tests using the configuration defined in wdio.conf.ts.

## Additional Configuration

If you need to make changes to the test configuration, you can edit the wdio.conf.ts file in the project's root directory.

## License

[MIT](https://choosealicense.com/licenses/mit/)
