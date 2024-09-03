//Funciones

const greeting = (fullname?:string) :string  => {
    if(fullname){
    return `Hola Buen dia ${fullname}`
    } else {
        return 'Hola Buen Dia'
    }
}

console.log(greeting('Fernando'))

function goodbye(fullname: string = 'Ever'):string {
    return `Adios ${fullname}`
}

console.log(goodbye())
console.log(greeting())

const sum = (num1:number, num2:number) => {
    let sum = num1 + num2
    console.log(`El resultado de la suma es ${sum}`)
}

sum(2,4)