import { ICoach } from "./ICoach.js";

export class GolfCoach implements ICoach{
    getDailyWorkOut(): string {
        return "Hits 100 balls at the golf range."
    }
}