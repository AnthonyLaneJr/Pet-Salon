//Astrid
// let studentFirstName=`Astrid`;
// let studentLastName=`Batres-guerrero`;
// let studentAge=`25`;
// let studentIsActive=true;
//arrays []

// objects literal {}
let student1= {
    //attribute or attr:value,
    firstName:`Astrid`,
    lastName:`Batres-Guerrero`,
    age:25,
    isActive:true
}

let student2 = {
    firstName:`Anthony`,
    lastName:`Lane`,
    age:22,
    isActive:true
}

let student3 = {
    firstName:`Ben`,
    lastName:`Vance`,
    age:25,
    isActive:false,
    hobbies:[`Listen Music`,`Read`,`Play Zelda`],
    address:{
        street:`Palm street`,
        zip:`22769`,
        number:`262-k`,
    }
}

console.log(student1.firstName);
console.log(student2[`lastName`]);
console.log(student3.hobbies[1]); //display read, an array inside of an object
console.log(student3.address.zip) //display zip, variable inside of on object, inside of another object
console.log(student3[`address`][`zip`]) //same ass above line,just different style

//challenge:create an object for a client with the attr, first name, last name, type of subscription type, active, credits --- display the info in console

let client1 = {
    firstName:`Tony`,
    lastName:`Lane`,
    subscription:{
        type:`Premium`,
        active:true,
        credits:70,
    }
}
console.log(client1);
console.log(`Number of Credits:`,client1.subscription.credits);

let students=[
    {
    firstName:`Astrid`,
    lastName:`Batres-Guerrero`,
    age:25,
    isActive:true
},
{
    firstName:`Anthony`,
    lastName:`Lane`,
    age:22,
    isActive:true
},
{
    firstName:`Ben`,
    lastName:`Vance`,
    age:25,
    isActive:false,
    hobbies:[`Listen Music`,`Read`,`Play Zelda`],
    address:{
        street:`Palm street`,
        zip:`22769`,
        number:`262-k`,
    },
}];

console.log(students);
console.log(students[0].firstName);
// -----a way to display students into HTML and console-------
// function displayStudents(){
//     //display the length of the arrray
//     for(let i=0;i<students.length;i++){
//         console.log(`<li>${students[i].firstName}</li>`)
//         document.getElementById(`students`).innerHTML+=`<li>${students[i].firstName}</li>`
//     }
// }

//  ----Another Option to display all iterations inside fo the document + console, this version displays all iterations inside of the console as opposed to the above option which only displays the final lnegth iteration-------
// function displayStudents(){
//     //display the length of the arrray
//     let tmp =``;
//     for(let i=0;i<students.length;i++){
//         tmp +=`<li>${students[i].firstName}</li>`;
//         console.log(tmp)
//         document.getElementById(`students`).innerHTML+=`<li>${students[i].firstName}</li>`
//     }
// }


//----standard way to display info from an array -------
function displayStudents(){
    //display the length of the arrray
    let tmp =``;
    let div=document.getElementById(`students`);
    for(let i=0;i<students.length;i++){
        tmp +=`<li>${students[i].firstName}</li>`;
    }
    div.innerHTML=tmp;
}

displayStudents();

// ------Another way to insert text into HTML via code ----------
// let p = document.createElement(`p`);
// console.log(p);
// let text = document.createTextNode(`This is a paragraph`);
// console.log(text);
// p.appendChild(text);

// let div=document.getElementById(`students`);
// div.appendChild(p);
