Project Setup and Execution Guide
Welcome to your automated testing project! This guide will walk you through how to set up, run, and view the results of this project, even if you have no prior IT experience.

## 1. Prerequisites: What You Need
Before you start, make sure you have the following installed:

Node.js (version 14 or higher): You can download it [here](https://nodejs.org/en).
A Text Editor (like Visual Studio Code): You can download it [here](https://code.visualstudio.com/download).
## 2. Setting Up the Project
Follow these steps to set up the project on your machine:

### Download or Clone the Project:

If you received a ZIP file, extract it to a folder of your choice.
If using Git, clone the repository using:

```git clone https://github.com/nezihekisac/amazon-project.git```
### Open the Project Folder:

Open the extracted or cloned folder using your text editor (e.g., Visual Studio Code).
Install Dependencies:

Open the terminal (you can use the terminal inside Visual Studio Code).
Run the following command to install all required packages:

```npm install```
This command will download and install all necessary libraries for the project.
## 3. Running the Tests
You have two options for running the tests: interactively or headlessly.

Option 1: Run Tests Interactively (for Debugging)
Run the following command:

npx cypress open
The Cypress Test Runner will open. Choose E2E Testing and select your browser.
Click on a test file to run it. You’ll see the tests execute step-by-step in a browser window.
Option 2: Run Tests in Headless Mode (For Generating Reports)
Run the following command:

npx cypress run
The tests will run automatically without opening a browser window.
Once the tests finish, the reports and screenshots will be generated.
## 4. Viewing the Test Reports and Screenshots
After the tests run, you can view the results.

### HTML Report:

The test results are stored as an HTML report in the cypress/reports folder.
To view the report:
Navigate to cypress/reports in your file explorer.
Look for a file named mochawesome.html (or similarly named).
Double-click to open the file in your browser.
Screenshots of Failed Tests:

If any tests fail, screenshots are captured automatically.
Screenshots are stored in the cypress/screenshots folder.
Open the folder to view the images.
## 5. Cleaning Up Reports and Screenshots
Before running tests again, it’s good practice to clean up old reports and screenshots:

Open the terminal and run:

```npm run clean```
This command will delete all existing reports and screenshots, ensuring the new test run results are clean and easy to review.
## 6. What to Do if You Encounter Issues
If you run into any problems:

Ensure all dependencies were installed correctly by re-running npm install.
Check that Node.js is properly installed and up-to-date.
If tests fail unexpectedly, try re-running them using npx cypress run and check the error messages in the HTML report.
## 7. Conclusion
You should now be able to set up, run, and review the automated tests for this project. If you have any questions, feel free to reach out to me.

Nezihe Kisac

- Github: [@nezihekisac](https://github.com/nezihekisac)
- Linkedin: [Nezihe Kisac](https://www.linkedin.com/in/nezihekisac/)
- E-mail: nezkisac@gmail.com