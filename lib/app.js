// adding const to get code ready
const inquirer = require('inquirer');
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const path = require('path');
// function to use inquirer to prompt questions and getting user answers
class APP {
    run () {
        return inquirer.prompt([
            // question 1 to get user text
            {
                name : "text",
                type: "input",
                message: "Put text for logo. (Should be not more than 3 characters.)",
                validate: (text) =>
                text.length <= 3 || " Text must not be more than 3 characters",
            },
            // question 2 to get user text color
            {
                name: "textColor",
                type: "input",
                message: "Add text color",
            },
            // question 3 to get user shape
            {
                name: "ShapeType",
                type: "list",
                message: "Pick a shape for your logo",
                choices: ["circle", "square", "triangle"],
            },
            // question 4 to get user logo color
            {
                name: "ShapeColor",
                type: "input",
                message: "Add shape color",
            },
        ])
        // filtering answers to check which shape was chosen
        .then(({ text, textColor, ShapeType, ShapeColor}) => {
            let shape;
            switch (ShapeType) {
                case "circle":
                    shape = new Circle();
                    break;

                    case "square":
                        shape = new Square();
                        break;

                    default:
                        shape = new Triangle();
                        break;    
            }
            // setting color to shape
            shape.setColor(ShapeColor);
            // creating new svg logo 
            const svg = new SVG();
            // setting text and text color
            svg.setText(text, textColor);
            // setting shape for logo
            svg.setShape(shape);
            // saving logo to examples folder
            return writeFile(path.join(__dirname, "..", "examples", "logo.svg"), svg.render());
        })
        // printing message to state that logo is added
        .then(() => {
            console.log('Adding logo.svg');
        })
        // checking if there is any error
        .catch((error) => {
            console.log(error);
            console.log('Something went wrong.');
        });
        
    }
}
module.exports = APP;