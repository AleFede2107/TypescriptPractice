//Consumir una API USANDO POO
//LA CLASE DEBE CONTENER 2 METODOS getData, renderData
//Instanciar la clase y renderizar en el dom
//https://official-joke-api.appspot.com/random_joke

interface IChiste {
    type: string
    setup: string
    punchline: string
    id: number
}

class Chiste {
    private async obtenerChiste() {
        try {
       
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data:IChiste = await response.json()
            return data
        } catch (error) {
            throw new Error ('Fallo el llamado a la api')
        }
    }

    public async renderJoke(){
        const data = this.obtenerChiste();
        const app = document.getElementById('app')

        app!.innerHTML = `
        <h1>${(await data).setup}</h1>
        <h2>${(await data).punchline}</h2>
        `
    }
}

const joke = new Chiste
await joke.renderJoke()

const button:HTMLButtonElement = document.createElement('button')
button.textContent = 'New Joke'
document.getElementById('app')?.appendChild(button)
button.addEventListener('click', async ():Promise<void | never> => {console.log('notification'); await joke.renderJoke() })