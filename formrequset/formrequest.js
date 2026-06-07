



const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const notesLabel = document.querySelector("#notesLabel");


travelRange.addEventListener("change", updateNotesField);


function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;

}


function updateNotesField() {
  const selectedText =
    travelRange.options[travelRange.selectedIndex].text;

  if (selectedText === "other") {
    notesContainer.hidden = false;
  }else {
    notesContainer.hidden = false; // show notes for all options
  }
  
    switch (travelRange.value) {
    case "movie":
      notesLabel.textContent = "Favorite movie genre?";
      break;

    case "stargazing":
      notesLabel.textContent = "Best place to watch the stars?";
      break;

    case "gym":
      notesLabel.textContent = "What workout are we doing?";
      break;

    case "other":
      notesLabel.textContent = "Describe your date idea";
      break;
    }
  
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const note = form.notes.value.trim();

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Chosen Date: ${travelRange.options[travelRange.selectedIndex].text}</p>
  ${note ? `<p>Travel Notes: ${note}</p>` : ""}
  `;

  form.reset();
  updateNotesField();
});