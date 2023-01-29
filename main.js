//  ##### EX1 #####

class Shape {

    constructor (sides, sideLength){
        this.name = "name"
        this.sides = sides
        this.sideLength = sideLength
    }


    calcPerimeter(){
        console.log("Peramiter: " + this.sideLength*this.sides)
    }
}

const square = new Shape(4,5)

// square.calcPerimeter()

const triangle = new Shape(3,3)

// triangle.calcPerimeter()


//  ##### EX2 #####

class Circle {
    constructor (radius) {
        this.radius = radius
    }
    
    static PI = 3.14
    
    area(){
        return "Area of the circle: " + (Circle.PI*this.radius)
    }
}

class Account {
    constructor(balance, owner){
        this.balance = balance
        this.owner = owner
    }
    
    static create(owner) {
        return new Account(0, owner);
    }
}


//  ##### EX6 #####

class BankAccount{
    constructor(accountNumber , accountHolder, accountBalance){
        this.accountNumber = accountNumber 
        this.accountHolder = accountHolder
        this.accountBalance = accountBalance
    }

    deposit (num) {
        return this.accountBalance + num
    }
    withdraw (num) {
        return this.accountBalance - num
    }
    checkBalance () {
        return this.accountBalance
    }
}



//  ##### EX7 #####

class Animal{
    constructor(name, species){
        this.name = name
        this.species = species
    }

    makeSound(){
        return "the animal is making sound"
    }
}

class Dog extends Animal{
    constructor(name,species){
        super(name,species)
    }

    bark(){
        return "The dog is barking"
    }
}
class Cat extends Animal{
    constructor(name,species){
        super(name,species)
    }

    meow(){
        return "The cat is meowing"
    }
}
class Lion extends Animal{
    constructor(name,species){
        super(name,species)
    }

    roar(){
        return "The Lion is roar"
    }
}



