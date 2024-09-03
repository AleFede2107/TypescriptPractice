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

const getCharacters = async():Promise<IResponse | never> => {
    try {
        const response:IResponse = await axios.get(`https://rickandmortyapi.com/api/character`);
        console.log(response.data)
        return response.data
    } catch (error) {
        throw new Error('Error API Error')
    }
}

getCharacters()