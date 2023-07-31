// console.log("hello 1")

// setTimeout(function() {
//     console.log("Hello 2");
// }, 0);
// console.log('hello 3')


const firstName = () => console.log("Achyut")
const lastName = () => console.log("Parajuli")

const printName = () => {
    console.log("My name is: ");
    setTimeout(firstName, 0);
    lastName();
}

printName();