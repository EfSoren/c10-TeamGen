//Houses questions for inquirer
const manQuery = [
    {type: 'input', message: 'What is the managers name?', name: 'name',},
    {type: 'input', message: 'What is the managers id number?', name: 'id',},
    {type: 'input', message: 'What is the managers E-mail?', name: 'email',},
    {type: 'input', message: 'What is the managers office number?', name: 'officeNumber'},
    {type: 'confirm', message: 'Would you like to add another employee to your team?', name: 'continue'}]
const empQuery = [

    {type: 'list', message: 'What is this employees role?', name: 'role', choices: ['Engineer', 'Intern']},
    {type: 'input', message: 'What is this employees name?', name: 'name',},
    {type: 'input', message: 'What is this employees id number?', name: 'id',},
    {type: 'input', message: 'What is this employees E-mail?', name: 'email',},
    {type: 'input', message: 'What is this employees github username', name: 'github', when: (answers) => answers.role === 'Engineer'},
    {type: 'input', message: 'What school does this employee attend ', name: 'school', when: (answers) => answers.role === 'Intern'},
    {type: 'confirm', message: 'Would you like to add another employee to your team?', name: 'continue'}]


exports.manQuery = manQuery
exports.empQuery = empQuery
