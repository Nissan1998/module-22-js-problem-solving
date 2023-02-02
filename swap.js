let age = 22;
let age2 =25;
const temp = age;
age =age2;
age2 = temp;
console.log(age,age2);

// we can swap the value by destructuring example:-
[age, age2]=[age2,age];
console.log(age,age2);
