# SVG_Logo_Maker


## Description.

SVG Logo Generator is a command-line tool that enables users to create simple SVG logos based on a few input parameters such as text, text color, shape, and shape color. Users can create logos with up to 3 characters of text, placed over their choice of shape (circle, square, or triangle) and with their desired colors.

## Table Of Contents.

.Description
.Installation
.Usage
.Testing
.Dependencies

## Usage

1. Installation:
Before using the SVG Generator, ensure you have Node.js installed on your computer. If not, download and install it from Node.js official website.

Next, clone or download this repository to your local machine. Navigate to the directory where the repository is located using your command line or terminal.

To install the necessary dependencies, run:

bash
Copy code
\`\`\`
npm install
\`\`\`
This command will install the required packages, including inquirer.

2. Running the Application:
To start the application, in your terminal type:

bash
Copy code
\`\`\`
node index.js
\`\`\`
Follow the on-screen prompts, answering questions about your project. These questions include:

Text for the logo (up to 3 characters).
Color for the text.
Shape type (choices include circle, square, triangle).
Color for the chosen shape.
Upon completing the questions, the application will automatically generate a SVG Logo in the examples directory, populated with the information you provided.

3. Generated Logo:
Open the generated logo.svg in any markdown viewer or editor to see the final output. You can then further customize it if needed or move it to your project directory.

With this usage guide, users can quickly understand how to set up and use the Logo Generator.

4. Testing:
User will need to add jest as a development dependencies to run test:
use code
\`\`\`
npm i --save-dev jest
\`\`\`

To start the testing, in your terminal type:
bash
Copy code
\`\`\`
npm run test
\`\`\`

## Demo.

https://drive.google.com/file/d/1ovTI9ivIo3_hF0cqQca9F2u-LVK-qMWK/view



## Deployed Page Link.

 

## Credits.
https://www.w3schools.com/graphics/svg_ellipse.asp
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
https://en.wikipedia.org/wiki/SVG
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts
https://marketplace.visualstudio.com/items?itemName=jock.svg