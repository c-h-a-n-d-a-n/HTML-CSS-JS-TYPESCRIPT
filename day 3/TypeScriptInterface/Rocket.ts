import { Astronaut } from "./Astronaut"
import { Cargo } from "./Cargo"
import { IPayload } from "./IPayload"

export class Rocket {
    name: string
    totalCapacityKg: number
    cargoItems: Cargo[]=[]
    astronauts: Astronaut[]=[]

    constructor(thename:string,thetotalCapacityKg:number){
        this.name=thename
        this.totalCapacityKg=thetotalCapacityKg
    }

    // Methods
    sumMass( items: IPayload[] ): number{
        
        let sum:number=0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg(): number{
        return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
    }

    canAdd(item: IPayload): boolean{
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }
    

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}