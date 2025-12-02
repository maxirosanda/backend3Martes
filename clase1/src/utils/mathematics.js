
const addition = (...values) => {
    const result = values.reduce((value,acc)=> acc + value,0)
    return result
}

// tiene que sumar 1 + 3

const resultOne= addition(1,3)

if(resultOne === 4) {
    console.log("ok")
} else {
    console.log("error")
}

console.log(resultOne)

// tiene que sumar 20 + 4

const resultTwo = addition(20,4)

if(resultTwo === 24) {
    console.log("ok")
} else {
    console.log("error")
}

console.log(resultTwo)

// tiene que poder sumar 3 numeros

const resultThree = addition(20,4,10)

if(resultThree === 34) {
    console.log("ok")
} else {
    console.log("error")
}

console.log(resultThree)

// tiene que sumar cualquier cantidad de numeros

const resultFour = addition(20,4,10,5,4)

if(resultFour === 43) {
    console.log("ok")
} else {
    console.log("error")
}

console.log(resultFour)
