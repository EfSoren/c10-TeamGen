const manager = require('../lib/manager.js');

test('Checks for values in new employee', () =>{
    const nMan = new manager('Ethan', 1, 'Ef.soren', 2)
    expect(nMan.name).toBe('Ethan')
    expect(nMan.id).toEqual(1)
    expect(nMan.email).toEqual('Ef.soren')
    expect(nMan.officeNumber).toEqual(2)

})

test('checks for overwritten role',()=>{
    const nMan = new manager('Ethan', 1, 'Ef.soren', 2)
    expect(nMan.getRole()).toBe('Manager')
})