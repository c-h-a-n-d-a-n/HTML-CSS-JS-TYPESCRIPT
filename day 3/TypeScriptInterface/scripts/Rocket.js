"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = void 0;
class Rocket {
    constructor(thename, thetotalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = thename;
        this.totalCapacityKg = thetotalCapacityKg;
    }
    // Methods
    sumMass(items) {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }
    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item) {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}
exports.Rocket = Rocket;
