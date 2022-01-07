const Person = require('entidad/persona');


test('one character name should throw an error', () => {
    expect(() => {
        new Person('n', 'perez', 20);
    }).toThrow("invalid name error");
});

test('name starting with space should throw an error', () => {
    expect(() => {
        new Person(' pedro', 'perez', 20);
    }).toThrow("name starting with spaces error");
});

test('should return new Person named Adam', () => {
    let newPerson = new Person('Adam', 'perez', 20)
    expect(newPerson.name).toEqual('Adam');
});

test('name ending with space should throw an error', () => {
    expect(() => {
        new Person('pedro ', 'perez', 20);
    }).toThrow("name ending with spaces error");
});

test('name longer than 64 should throw an error', () => {
    expect(() => {
        new Person('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'perez', 20);
    }).toThrow("invalid name error");
});


test('one character lastname should throw an error', () => {
    expect(() => {
        new Person('nitido', 'p', 20);
    }).toThrow("invalid lastname error");
});

test('lastname starting with space should throw an error', () => {
    expect(() => {
        new Person('pedro', ' perez', 20);
    }).toThrow("lastname starting with spaces error");
});

test('should return new Person named Adam', () => {
    let newPerson = new Person('Adam', 'perez', 20)
    expect(newPerson.lastName).toEqual('perez');
});

test('lastname ending with space should throw an error', () => {
    expect(() => {
        new Person('pedro', 'perez ', 20);
    }).toThrow("lastname ending with spaces error");
});

test('lastname longer than 64 should throw an error', () => {
    expect(() => {
        new Person('Pedrp', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 20);
    }).toThrow("invalid lastname error");
});