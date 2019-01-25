export class Issue{
    firstname:string;
    surname:string;
    count:string;
    dob:string;

    constructor(fields:string[]){
        this.firstname=fields[0];
        this.surname=fields[1];
        this.count=fields[2];
        this.dob=fields[3];
    }
}