const intern = require('../lib/intern.js');

test('Checks for values in new employee', () =>{
    const nInt = new intern('Ethan', 1, 'Ef.soren', 'University of Utah')
    expect(nInt.name).toBe('Ethan')
    expect(nInt.id).toEqual(1)
    expect(nInt.email).toEqual('Ef.soren')
    expect(nInt.school).toEqual('University of Utah')
})
test('checks for school', ()=>{
    const nInt = new intern('Ethan', 1, 'Ef.soren', 'University of Utah')
    expect(nInt.getSchool()).toBe('University of Utah')
})
test('checks for overwritten role',()=>{
    const nInt = new intern('Ethan', 1, 'Ef.soren', 'University of Utah')
    expect(nInt.getRole()).toBe('Intern')
})