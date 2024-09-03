let fullname = "Federico"

let address:string = 'El Salvador, San Salvador'

let edad:number = 24

let alive:boolean = true
let asistencia:boolean = false

let today:Date = new Date()

//arrays 
let language:string[] = ['PHP', 'JS', 'Go']
let years:Array<number> = [2020,2021,2022,2023]

//Tuplas
const tuplas:[string, boolean, number] = ['Hola', true, 2024]

//Enum

enum Roles {
    Manager,
    Editor,
    Viewer
}

let userRole:Roles = Roles.Manager



/* console.log(fullname)
console.log(address)
console.log(edad)
console.log(alive)
console.log(asistencia)
console.log(today) */