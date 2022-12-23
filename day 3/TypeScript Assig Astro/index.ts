interface IAstronout{
    massKg: number
    name: string
}
interface ICargo{
    massKg: number
    material: string
}
class Astronout implements IAstronout{
    massKg: number
    name: string

    constructor(thismasskg:number,thisname:string){
        this.massKg=thismasskg
        this.name=thisname
    }
}

class Cargo implements ICargo{
    massKg: number
    material: string

    constructor(thismasskg:number,thismaterial:string){
        this.massKg=thismasskg
        this.material=thismaterial
    }
}

