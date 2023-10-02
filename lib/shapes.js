// main class for shapes
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

// class circle inh. from main class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// class Triangle inh. from main class
class Triangle extends Shape {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// class Square inh. from main class
class Square extends Shape {
    render () {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

module.exports ={ Circle, Triangle, Square };
