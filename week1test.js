const name = "Leo"

const age = 120

const isHappy = false

function runLater(){
    return 1 + 1
}

// const runLater = () => {
//     const num1 = 1
//     const num2 = 2
//     return num1 + num2
// }

// if(isHappy){
//     console.log("I'm Happy")
// }else{
//     console.log("Not Happy!")
// }

const names = ["Leo", "Chris", "Daniel"]

const person = {
    name: "Leo",
    age: 120,
    bio(lastName){
        console.log("Hello my name is " + lastName + " and I'm " + this.age + " years ago")
    }
}


const num = []

const num2 = new Array()

// person.bio("Li")






class Person {
constructor(name, age, isHappy = true){
this.name = name
this.age = age
this.isHappy = isHappy
}
bio(){
    console.log("My name is " + this.name + " and I'm " + this.age + " years old and I'm happy: " + this.isHappy)
}

}

const person1 = new Person("Leo", 120, false)


//person1.bio()



const numbers = [1,2,3,4,5,6,7,8,9,10]
const multiNumbers = numbers.map(number => number * 2)


const filterData = numbers.filter(number => number < 6)


// console.log(filterData)
// console.log(multiNumbers)

const sumAll = numbers.reduce((a,b) => a + b, 10) 
console.log(sumAll)

const people = [
    {
    name: "Leo",
     age:120
    },
    {},
    {}
]

