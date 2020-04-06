const Employee = require('./Employee.js')



// engineer class constructor
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.github = gitHub;
    this.title = 'Engineer';
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.title;
  }
}

module.exports = Engineer;
