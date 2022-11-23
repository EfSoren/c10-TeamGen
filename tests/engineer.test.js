
const engineer = require('../lib/engineer.js');

test('Checks for values in new employee', () =>{
    const nEng = new engineer('Ethan', 1, 'Ef.soren', 'EfSoren')
    expect(nEng.name).toBe('Ethan')
    expect(nEng.id).toEqual(1)
    expect(nEng.email).toEqual('Ef.soren')
    expect(nEng.github).toEqual('EfSoren')
})

test('checks for github', ()=>{
    const nEng = new engineer('Ethan', 1, 'Ef.soren', 'EfSoren')
    expect(nEng.getGithub()).toBe('EfSoren')
})
test('checks for overwritten role',()=>{
    const nEng = new engineer('Ethan', 1, 'Ef.soren', 'EfSoren')
    expect(nEng.getRole()).toBe('Engineer')
})