import { Astronaut } from "./Astronaut";
import { Rocket } from "./Rocket";

let roc: Rocket = new Rocket('roc', 1234);


let astro: Astronaut[] = [ new Astronaut(55,'chandan'),new Astronaut(50,'Rohan')];
for (let i = 0; i < astro.length; i++) {
    let astron = astro[i];
    let status = '';
    if (roc.addAstronaut(astron)) {
       status = "On";
    } else {
       status = "Off";
    }
    console.log(`${astron.name}:${status}`);
 }

 