"use strict";
// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["MANAGER"] = 2] = "MANAGER";
    Role[Role["COORDINATOR"] = 3] = "COORDINATOR";
})(Role || (Role = {}));
// class
class PermanentEmployee {
    // constructor
    constructor(_code, _name) {
        // instance variables
        this.empCode = 0;
        this.empName = "";
        // additional data fields
        this.role = Role.ADMIN;
        this.isContract = false;
        this.empCode = _code;
        this.empName = _name;
    }
    getSalary(empCOde) {
        return 75000;
    }
    // custom methods
    getWages() {
        console.log("Hourly rate is " + 1000);
    }
}
// Entry point
let emp = new PermanentEmployee(1001, "Mark");
console.log(emp.empName);
console.log(emp.getSalary(1001));
console.log(emp.isContract);
console.log(emp.role);
