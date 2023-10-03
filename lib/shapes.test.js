// getting functions to be tested from shapes file
const { Circle, Triangle, Square } = require('./shapes');

// Unit testing -> testing for a circle with a blue background to render
describe('Circle', () => {
    test('test for a circle with blue background', () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
        const circle = new Circle();
        circle.setColor('blue');
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
// Unit testing -> testing for a triangle with a red background to render
describe('Triangle', () => {
    test('test for a triangle with red background', () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="red" />';
        const triangle = new Triangle();
        triangle.setColor('red');
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
// Unit testing -> testing for a square with a green background to render
describe('square', () => {
    test('test for a square with green background', () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="green" />';
        const square = new Square();
        square.setColor('green');
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    })
})