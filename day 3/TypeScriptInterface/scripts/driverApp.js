"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Astronaut_1 = require("./Astronaut");
const Rocket_1 = require("./Rocket");
let roc = new Rocket_1.Rocket('roc', 1234);
let astro = [new Astronaut_1.Astronaut(55, 'chandan'), new Astronaut_1.Astronaut(50, 'Rohan')];
for (let i = 0; i < astro.length; i++) {
    let astron = astro[i];
    let status = '';
    if (roc.addAstronaut(astron)) {
        status = "On";
    }
    else {
        status = "Off";
    }
    console.log(`${astron.name}:${status}`);
}
