import axios from 'axios'
// get characters

export interface IResponse {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

const getCharactersAxios = async():Promise<IResponse | never> => {
    try {
        const response = await axios.get<IResponse>(`https://rickandmortyapi.com/api/character`);
        console.log(response.data)
        return response.data
    } catch (error) {
        throw new Error('Error API Error')
    }
}

getCharactersAxios()


const getCharactersFetch = async() => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data:IResponse = await response.json()
        return data
    } catch (error) {
        throw new Error('Error API ERROR')       
    }
}

const renderCharacters = async() => {
    const container = document.getElementById('app')
    const data  = await getCharactersFetch()
    if(data){
        data.results.map(result => {
            const div = document.createElement('div')
            div.innerHTML = `
                <h1> ${result.name}</h1>
            `
            container?.appendChild(div)
        })
    } else{
        container!.innerHTML = `
            <h1>TODO SE FUE A LA FREGADA T.T</h1>
        `
    }
}

renderCharacters();