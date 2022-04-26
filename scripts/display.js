//display pets in list items

//  Inneficient way
//
// function displayPet(){
//      //cerate text
//     let petsDiv = document.getElementById(`pets`);
//     petsDiv.innerHTML=``;
//     for(let i=0;i<petSalon.pets.length;i++){
//         let pet = petSalon.pets[i];
//         let li = document.createElement("li");  //creates li tag
//         let text = document.createTextNode(pet.name)
//     li.appendChild(text);
//     petsDiv.appendChild(li);
// }}


//efficient way

function displayPet(){
    //cerate text
   let petsDiv = document.getElementById(`pets`); //assigning a div to this let (div is on HTML)
   let tmp=``;
   for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]; //get each pet with loop
        tmp+=`<li>${pet.name} --- ${pet.age}</li>`;} // += adds the previous itterations of loop into tmp variable value
    document.getElementById(`pets`).innerHTML=tmp
}

//dispaly pets in cards
function displayCards(){
    let tmp=``;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
        <div class="col">
            <div class="pet-header">
                <h4>${pet.name}</h4>
                <button onclick="deletePet()" class="btn btn-secondary">🗑️</button>
            </div>
                <p>${pet.age}</p>
                <p>${pet.gender}</p>
                <p>${pet.breed}</p>
                <p>${pet.phone}</p>
        </div>`;
    }
    document.getElementById(`pets`).innerHTML=tmp;
}


//display pets in table

function displayTable(){
    let tmp=``;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
            <tr id="${pet.id}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.color}</td>
                <td>${pet.phone}</td>
                <td><button onclick="deletePet(${pet.id})" class="btn btn-secondary">🗑️</button></td>
            </tr>
        `
    }
    document.getElementById(`pets`).innerHTML=tmp;
}