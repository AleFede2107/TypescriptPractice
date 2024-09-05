/* class Perro{
    raza: string
    edad: number
    color: string

    public ladrar():void {
        console.log('El perro ha ladrado')
    }

    public comer(name:string):string {
        return `${name} ha ido a comer`
    }
}

const perro = new Perro()

console.log(perro.comer('Fido')) */

class Persona{
    name: string
    lastname: string
    bootcamp: string

    //Constructor
    constructor(name:string, lastname:string, bootcamp:string){
        this.name = name;
        this.lastname = lastname;
        this.bootcamp = bootcamp;
    }

    public hablar(){
        console.log(`${this.name} ha hablado`)
    }
}

const persona = new Persona('Federico', 'Alegria', 'FSJ=24')
console.log(persona.hablar())

const persona2 = new Persona('Gisela', 'Valladares', 'FSJ=24')
console.log(persona2.hablar())