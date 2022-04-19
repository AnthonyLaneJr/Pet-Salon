let petSalon= {
    name:`The Fashionable Pet`,
    address:{
        street:`University Ave.`,
        number:`787`,
        city:`San Francisco`,
        state:`California`,
        zip:`23456`},
    hours:{
        open:`9:00 a.m.`,
        close:`8:00 p.m.`},
    pets:[ //for hw minimum of 4 pets- display on console and html
    //     {
    //         //obj 1
    //     },
    //     {
    //         //obj 2
    //     },
    //     {
    //         //obj 3
    //     }
     ]
}
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
}
//how to get value from input and store info
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("tel");

function register(){
    //create pet
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value,);
    console.log(thePet);
    //push into array
    petSalon.pets.push(thePet);
    //clear the input
    clearInputs();
    console.log(petSalon.pets)
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
}

//existing pets
let pet1 = new Pet(`Samson`,2,`Male`,`Golden Doodle`,`grooming`,`Anthony`,`###-###-###`);
let pet2 = new Pet(`Bailey`,12,`Female`,`Pitbull`,`Nails trimmed`,`Matthew`,`702-###-####`);
let pet3 = new Pet(`Summer Moon`,9,`Female`,`Husky`,`Grooming`,`Rowen`,`805-###-####`);
petSalon.pets.push(pet1,pet2,pet3);

console.log(petSalon);
function displaySalonInfo(){
}

function displayPetNames(){
}

function displayNumberOfPets(){
    alert(`Number of pets registered in system: ${petSalon.pets.length}`)
}

document.getElementById(`footer`).innerHTML=(`<p>${petSalon[`name`]}</p><p>${petSalon.address[`number`]}  ${petSalon.address[`street`]}  ${petSalon.address[`city`]},   ${petSalon.address[`state`]},  ${petSalon.address[`zip`]}</p><p>Open: ${petSalon.hours[`open`]} - ${petSalon.hours[`close`]}, Mon-Sat</p>`)