
// retrieve the form from the DOM, print out the result
//const form = document.querySelector("#fsyForm");

//console.log(form);

//add event listiner to the form to detect submit

form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(event);
  console.log(form.firstName.value);

    const numberOfCampuses = form.travelRange.value;
    const campuses = form.campus.value;
    console.log(campuses);
    if(numberOfCampuses === "one" && 
        getCheckedCampuses(campuses).length == 0) {
          console.log("no campuses checked");

          document.getElementById("output")
                  .textContent = "please select one campus, josh";
                  return;
    }

    if(!isDateValid()) {
      document.getElementById("output")
      .textContent = "please choose a future date, josh";
      return;
    }
});

function getCheckedCampuses(campuses){
      return Array.from(campuses)
     .filter(campus => campus.checked)
      .map(campus => campus.value);


}


function isDateValid() {
  const date = document.getElementById("avalableDate").value;
  const todaysDate = new Date();
  return date > todaysDate;
}


    if(!isDateValid()) {
      document.getElementById("output")
      .textContent = "please choose a future date, josh";
      return;
    }