const Employee = require('./Employee.js')


//Manager class constructor
class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNumber = officeNum;
    this.title = 'Manager';
  }
  getOfficeNumber(){
    return this.officeNumber;
  }
  getRole() {
    return this.title;
  }
}

module.exports = Manager;