import { CricketCoach } from "./CricketCoach.js";
import { GolfCoach } from "./GolfCoach.js";
import { ICoach } from "./ICoach.js";

// create an object
let cricketCoach=new CricketCoach();
let golfCoach=new GolfCoach();

//declare an array for coaches
let theCoaches: ICoach[]=[];

//add the coaches to the array
theCoaches.push(cricketCoach)
theCoaches.push(golfCoach)

//print
for(let coach of theCoaches){
    console.log(coach.getDailyWorkOut())
}