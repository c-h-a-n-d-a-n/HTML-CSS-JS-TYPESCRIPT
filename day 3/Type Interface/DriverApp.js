"use strict";
exports.__esModule = true;
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
// create an object
var cricketCoach = new CricketCoach_1.CricketCoach();
var golfCoach = new GolfCoach_1.GolfCoach();
//declare an array for coaches
var theCoaches = [];
//add the coaches to the array
theCoaches.push(cricketCoach);
theCoaches.push(golfCoach);
//print
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var coach = theCoaches_1[_i];
    console.log(coach.getDailyWorkOut);
}
