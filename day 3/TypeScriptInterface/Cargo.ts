import { IPayload } from "./IPayload"

export class Cargo implements IPayload{
    massKg: number
    material: string

    constructor(thismasskg:number,thismaterial:string){
        this.massKg=thismasskg
        this.material=thismaterial
    }
}