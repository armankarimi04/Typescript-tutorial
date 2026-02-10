interface Person {
    name: string;
    age: number;
}

// 'keyof Person' will create a union type of 'name' and 'age', other settings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}


let person = {
    name: "Max",
    age: 27
};

printPersonProperty(person, "name");
printPersonProperty(person, "age");

// output:
// Printing person property name: "Max"
// // Printing person property name: "27"

// printPersonProperty(person, "job"); // error


// keyof can be used with index signatures to extract index type
type StirngMap = {
    [key: string]: unknown
};

// 'keyof StirngMap' resolves to string here
function createStringPair(property: keyof StirngMap, value: string) {
    return { [property]: value };
}

console.log(createStringPair('x', 'y')); // {x: 'y'}