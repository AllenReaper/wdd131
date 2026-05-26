
let names = ["jax", "jaxson", "mac"]
console.log(names);





const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
console.log(students);

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
console.log(words);


function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}




let studentName ="jaxson";
let TeacherName = ["Mr Mac","Mrs Mac"];
let TeacherAge = "26";
// this is an object
let student = {
    //key value info and actions

    name: "jaxson",
    classes: ["Mr Mac","Mrs Mac"],
    age: ["26","23"]
}
console.log(student.age)


//array method

names.forEach((names) =>{
    //runs this unit/function once for every element in the array
    //one at a time
    console.log(names);
})
//map
let newNames = names.map(()=>{

    return name + "hatchley"
})
console.log(newNames);





let filteredName = names.filter((names)=>{
    return name[0] === 'j'
})
console.log(filteredName);





const numbers = [125, 20, 5];

document.getElementById("output").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log(numbers);





const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

console.log(fruits);