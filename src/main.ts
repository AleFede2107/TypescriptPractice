interface IUsuario{
    nombre: string
    apellido: string
    animaFav: Array<string>
    edad?: number
    readonly vivo:boolean
    estatura:number
}

let usuario:IUsuario = {
    nombre: 'Carlos Rodrigo',
    apellido: 'Portillo',
    animaFav: ['Perros', 'Gatos', 'Leones'],
    edad: 23,
    vivo: true,
    estatura: 2.00
}

console.log(usuario.nombre)

enum Genero{
    Femenino = 'F',
    Masculino = 'M',
}

type Alumno = {
    nombre: string
    genero: Genero
    edad: number
    activo: boolean
}

let alumno: Alumno = {
    nombre: 'Gisela Valladares',
    genero: Genero.Femenino,
    edad: 19,
    activo: true
}

console.log(alumno.genero)