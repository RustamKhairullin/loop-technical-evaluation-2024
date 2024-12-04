# Loop Technical Evaluation 2024

This project is an end-to-end test suite built using **Playwright** with **TypeScript** to validate various workflows for the Loop Technical Evaluation.

## **Preconditions**

- Ensure you have **Node.js** and **npm** installed on your machine. [Download Node.js](https://nodejs.org)

## **Setup Instructions**

### **1. Clone the Repository**

Clone the repository to your local machine using HTTPS:

```
git clone https://github.com/RustamKhairullin/loop-technical-evaluation-2024.git
```

Navigate to the project folder:

```
cd loop-technical-evaluation-2024
```

### **2. Install Dependencies**

In the root directory, install Playwright and other dependencies:

```
npm install
```

```
npx playwright install
```

### **3. Environment Variables**

The project uses an `.env` file for managing sensitive credentials. The `.env` file is located in `tests/client-e2e/` and is ignored in the `.gitignore`. Create your own `.env` file in the `tests/client-e2e/` folder with the following structure:

```
E2E_BASE_URL="replace_with_demo_app_url"
E2E_ADMIN_USERNAME="replace_with_admin_username"
E2E_ADMIN_PASSWORD="replace_with_admin_password"
```

## **Usage**

### **Run Tests**

#### **1. Run tests in headless mode using Chromium with a single worker:**

```
npm run test
```

#### **2. Run tests in headed mode using Chromium with a single worker:**

```
npm run test-headed
```

#### **3. Run tests in headless mode using Chromium with parallel workers for faster execution:**

```
npm run test-parallel
```

#### **4. After test execution, view the detailed report:**
Opens the Playwright HTML report in your default browser.
```
npm run report
```

## **Project Structure**
```
loop-technical-evaluation-2024/
├── tests/                    
│   ├── client-e2e/            # End-to-end test suite
│   │   ├── src/               # Source files (helpers, selectors, etc.)
│   │   │   ├── data/          # Test data (e.g., testData.json)
│   │   │   ├── helpers/       # Helper functions for reusable code
│   │   │   ├── selectors/     # Selectors for page elements
│   │   ├── tests/             # Test scripts for specific test cases
│   │   ├── .env               # Environment variables for E2E tests (ignored)
│   │   ├── environment.config.ts  # Environment-specific configurations
│   │   ├── tsconfig.json      # TypeScript configuration
├── .gitignore                 # Git ignore rules
├── package-lock.json          # Exact dependency versions for consistent installs
├── package.json               # Project dependencies and npm scripts
├── playwright.config.ts       # Playwright configuration
├── README.md                  # Documentation
```
