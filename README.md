# SauceDemo Playwright Test Suite

### 🔧 Setup

```bash
npm install
```

### 🚀 Run Tests

```bash
npm run test
```

### 📊 View Report

```bash
npx playwright show-report
```

### 💡 Notes
- Make sure you have Node.js installed.
- Make sure you have playwright installed
- Tests use the default `standard_user` credentials from SauceDemo.

### Project Structure
 - Pages directory consisting of page objects of all pages i.e. (cartPage, checkoutOverviewPage, checkoutPage, inventoryPage, loginPage, orderCompletionPage)
 - A utility directory '**utils**' consisting of an "**enum**" directory, a "**locator**" directory.
 - util directory also has **commonUtil**, **pageManager** , **textConstant** classes
 - Enum directory consists of user enum class containing user credenitals and inventoryItem class having different inventory items shown on the inventory page
 - locators directory consists of different classes segregated for each page i.e. (cart, checkout, checkoutOverview, inventory, login, orderCompletion)
 - A global-setup.ts file is created that consists of the initial login scenario which is then storing the session of the said login into an auth.json file

Project Structure:- 
├── auth.json
├── global-setup.ts
├── package-lock.json
├── package.json
├── pages
│   ├── cartPage.ts
│   ├── checkoutOverviewPage.ts
│   ├── checkoutPage.ts
│   ├── inventoryPage.ts
│   ├── loginPage.ts
│   └── orderCompletionPage.ts
├── playwright.config.ts
├── README.md
├── test-results
├── tests
│   └── checkout-flow.spec.ts
├── tsconfig.json
└── utils
    ├── commonUtil.ts
    ├── enums
    ├── locators
    ├── pageManager.ts
    └── textConstant.ts

