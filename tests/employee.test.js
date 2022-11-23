
const employee = require('../lib/employee.js')

test('Checks for values in new employee', () =>{
    const nEmp = new employee('Ethan', 1, 'Ef.soren')
    expect(nEmp.name).toBe('Ethan')
    expect(nEmp.id).toEqual(1)
    expect(nEmp.email).toEqual('Ef.soren')
})

test('Checks methods inside class', () => {
    const nEmp = new employee('Ethan', 1, 'Ef.soren')
    const nAme = nEmp.getName()
    const nId = nEmp.getId()
    const nEmail =nEmp.getEmail()
    const nRole = nEmp.getRole()
    expect(nAme).toBe('Ethan')
    expect(nId).toBe(1)
    expect(nEmail).toBe('Ef.soren')
    expect(nRole).toBe('Employee')
})
