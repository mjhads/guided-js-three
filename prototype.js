//base

//parentProperties = {width: 39, height: 38}


// function Shape(width, height) {
//     this.width = width
//     this.height = height
//     this.shapeMethod = function() {
//         console.log(`this.method on shape ran`)
//     }
// }

// Shape.prototype.protoMethod = function() {
//     return `${this.width} ${this.height}`
// }

// function Rectangle()


function Shape(parentProperties) {
    this.width = parentProperties.width
    this.height = parentProperties.height
    this.shapeMethod = function() {
        console.log(`This shape has a width of ${this.width} and a 
        height of ${this.height}`)
    }
}

Shape.prototype.protoMethod = function() {
    return `${this.width} ${this.height}`
}


function Rectangle(childProperties) {
    Shape.call(this, childProperties)
    this.parimeter = childProperties.perimeter
}

const rectangle1 = new Rectangle({height: 5, width: 10, perimeter: 30 })
const rectangle2 = new Rectangle({height: 25, width: 50, perimeter: 150 })
const rectangle3 = new Rectangle({height: 10, width: 20, perimeter: 60 })

rectangleNew.shapeMethod()

console.log(
 '1',
 rectangle1.shapeMethod(), 
 '2', 
 rectangle2.shapeMethod(), 
 '3', 
 rectangle3.shapeMethod()



