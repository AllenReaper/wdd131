
// retrieve the form from the DOM, print out the result
//const form = document.querySelector("#fsyForm");

//console.log(form);

//add event listiner to the form to detect submit

//form.addEventListener("submit", event => {
//  event.preventDefault();
//  console.log(event);
//  console.log(form.firstName.value);

//    const numberOfCampuses = form.travelRange.value;
//    const campuses = form.campus.value;
//    console.log(campuses);
//    if(numberOfCampuses === "one" && 
//        getCheckedCampuses(campuses).length == 0) {
//          console.log("no campuses checked");

//          document.getElementById("output")
//                  .textContent = "please select one campus, josh";
//    }
//});
//function getCheckedCampuses(campuses){
    //  return Array.from(campuses)
    //  .filter(campus => campus.checked)
    //  .map(campus => campus.value);


//}










const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;

  // Show the travel notes on the form if they are choosing many campuses and require it
  
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}



function isDateValid() {
  const date = document.getElementById("avalableDate").value;
  const todaysDate = new Date();
  return date > todaysDate;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();



    

  // Validate the input
  // Let the user know to select at least one campus

  
  // Let the user know if they choose many campuses but didn't put a note that they need to add a note

  
  //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
  

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Campuses: ${selectedCampuses.join(", ")}</p>
  <p>Preference Level: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});
          