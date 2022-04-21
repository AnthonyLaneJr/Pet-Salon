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
    pets:[]
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

function isValid(aPet){    //returns false when the pet is not valid, returns true when the pet is valid (all sections filled)
    let valid=true;
    if(aPet.name.length==0){
        //if the name has less than 1 character, it will mean that aPet will be defined as false or inavlid.
        valid=false;
        console.error(`Invalid name`);
        alert(`Invalid name`);
    }
    if(aPet.service.length==0){
        valid=false;
        console.error(`Invalid service`);
        alert(`Invalid service`);
    }
    if(aPet.phone.length==0){
        valid=false;
        console.error(`Invalid phone`);
        alert(`Invalid phone`);
    }
    return valid;
}

function register(){
    //create pet
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value,);
    if(isValid(thePet)){ //ensure that the isValid function is true before publishing to array 
    console.log(thePet);
    //push into array
    petSalon.pets.push(thePet);
    //clear the input
    clearInputs();
    console.log(petSalon.pets);
    displayCards();}
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
    for(let i=0;i<petSalon.pets.length;i++){
            console.log(petSalon.pets[i][`name`])}
}

function displayNumberOfPets(){
    alert(`Number of pets registered in system: ${petSalon.pets.length}`)
}
displayCards();

document.getElementById(`footer`).innerHTML=(`<p>${petSalon[`name`]}</p><p>${petSalon.address[`number`]}  ${petSalon.address[`street`]}  ${petSalon.address[`city`]},   ${petSalon.address[`state`]},  ${petSalon.address[`zip`]}</p><p>Open: ${petSalon.hours[`open`]} - ${petSalon.hours[`close`]}, Mon-Sat</p>`)