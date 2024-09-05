// clases que encapsulan la logica de un objeto
class Hombre{
    //Atributos
    nombre:string
    dui: string
    edad: number
    altura: number

    //metodos
    public saludar(){
        console.log('El sujeto de pruebas ha saludado')
    }

    public trabajar(){
        console.log('El sujeto de pruebas esta trabajando')
    }
}

class Mujer extends Hombre{
    public maquillarse(){
        console.log('La sujeto se esta maquillando')
    }
}

class Hijo extends Hombre{
    public serFeliz(){
        console.log('El sujeto es feliz')
    }
}
const mujer = new Mujer

mujer.maquillarse()