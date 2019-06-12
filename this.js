//ways to share properties

//composition - compose functions ("put together") f(g(x)) ---> callbacks!

function A() {
    const myVAr = 'whatever'
    return myVar
}

A()

function B(msg) {
    console.log(msg)
}

B(A())

//Extending Parent *function* //Classes
//Modular Home Bluprint {Set instructions} - Properties (width, height, 
// rooms);
//Methods: (how to wire this, and build that)
// JS - USE FUNCTIONS - Object Oriented
//Constructor Function - function that builds ----> objects

//this

console.log('this', this)



const obj = {
    name: 'Me',
    speak: () {
        console.log('hi')
        console.log(obj)
    }
}

console.log('name', obj.name)
console.log('speak', obj.speak())


fucntion myFunFunction() {
    console.log(this)
}

myFunFunction()

//Case 1: Window Binding
//functions, in global directly

//Case 2: Implicit Binding

const player = {
    name: "John",
    type: "page",
    level: 99,
    weapons: ['Sword of 1000 Truths', 'Helm of Terror and Doom', 'pain']
    castPain: function() {
        console.log(`${this.weapons[2]} has been casted`)
    }
}

console.log(player.castPain())

const mage = {
    name:'John',
    type: 'mage',
    level: 99,
    weapons: ['Sword of 1000 Truths', 'Helm of Terror and Doom', 'pain']
    castPain: function() {
        console.log(`${this.weapons[2]} has been casted`)
    }
}

const demon = {
    name: 'Jay',
    type: 'demon',
    level: 998,
    weapon: ['Deathspell', 'Doom', 'MegaDoom', 'Mimic'],
    castMimic: function() {
        console.log(`${this.name} ${this.type}, ${this.level}`)
    }
}

//bind() - a method used on functions, that creates a new function 
//(a new this assignment)

const mimic = demon.castMimic.bind(mage)

console.log(demon.castMimic())

const mimicResponse = mimic()

console.log(mimicResponse)

//4 - New Constructor / binding ----> Constructor FUNCTIONS!

function Animal(food) {
    this.food = food
    this.eat = function() {
        console.log(`the animal likes to eat ${this.food}!`)
    }
}

//new!

const dog = new Animal('ALPO')
console.log(dog.eat())


const cat = new Animal('tunafish')
console.log(cat.eat())

const switcharoo = cat.eat.bind(dog)
console.log(switcharoo())

