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

<img width="458" height="453" alt="image" src="https://github.com/user-attachments/assets/0be86c6a-b2bc-47ea-bf4e-bfdd6460437e" />



