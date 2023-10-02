// creating class for svg shape
class SVG {
    constructor() {
        // properties to store the SVG text and shapes
        this.textElement = '';
        this.shapeElement = '';
    }
    // function to create shape 
    render() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }
    // setting text of shape and it's color
    setText(message, color) {
        if (message.length > 3) {
            throw new Error("Text must be 3 characters or less.");
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
    // setting shape with shape function in shapes.js
    setShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;