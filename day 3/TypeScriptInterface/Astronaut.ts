import { IPayload } from "./IPayload"

export class Astronaut implements IPayload {
    massKg: number
    name: string

    constructor(thismasskg:number,thisname:string){
        this.massKg=thismasskg
        this.name=thisname
    }
}