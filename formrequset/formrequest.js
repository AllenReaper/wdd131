const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const movieGenre = document.querySelector("#movieGenre");
const output = document.querySelector("#output");
const notesLabel = document.querySelector("#notesLabel");

// CONFIGURATION: Set Josh's secret favorite movie genre value here!
// Options from HTML: "romcom", "StarWars", "action", "sci-fi", "comedy"
const CORRECT_GENRE = "StarWars"; 

// A pool of random responses if they guess the wrong genre
const WRONG_GUESS_RESPONSES = [
  "❌ Incorrect! Josh would never watch that on a first date. Guess again!",
  "❌ Wrong!",
  "❌ Denied! Handsome Squidward would approve of your guess, but Josh doesn't.",
  "❌ Oof, not quite. Try a genre that keeps you on the edge of your seat!",
  "❌ Sorry Baby Wrong answer.",
  "❌ The King of the Beavers would never! Pick a different genre!"
];

travelRange.addEventListener("change", updateNotesField);

function isPastDate(value) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [year, month, day] = value.split('-');
  const chosen = new Date(year, month - 1, day); 
  return chosen < today;
}

function updateNotesField() {
  const selectedValue = travelRange.value;

  if (["movie", "stargazing", "gym", "other"].includes(selectedValue)) {
    notesContainer.hidden = false;
  } else {
    notesContainer.hidden = true;
    notes.required = false;
    movieGenre.required = false;
    notes.value = "";
    movieGenre.value = "";
    return;
  }

  if (selectedValue === "movie") {
    notesLabel.textContent = "Guess Josh's favorite movie genre to unlock this date!";
    movieGenre.hidden = false;
    movieGenre.required = true;   
    notes.hidden = true;
    notes.required = false;       
    notes.value = "";
  } else {
    movieGenre.hidden = true;
    movieGenre.required = false;
    notes.hidden = false;
    notes.required = true;        
    movieGenre.value = "";

    switch (selectedValue) {
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
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = ""; // Clear previous messages

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const availableDate = form.availableDate.value;
  const phoneNumber = form.phoneNumber.value.trim();
  
  // 1. Check if it's a Movie Date and if they guessed WRONG
  if (travelRange.value === "movie" && movieGenre.value !== CORRECT_GENRE) {
    output.style.color = "red"; 
    
    // Pick a completely random response from the array
    const randomIndex = Math.floor(Math.random() * WRONG_GUESS_RESPONSES.length);
    output.textContent = WRONG_GUESS_RESPONSES[randomIndex];
    
    return; // STOP the form submission right here
  }

  // 2. Date validation
  if (isPastDate(availableDate)) {
    output.style.color = "red";
    output.textContent = "Please choose a future date.";
    return;
  }

  // 3. Phone number length validation
  if (phoneNumber.length !== 10) {
    output.style.color = "red";
    output.textContent = "Number needs to be exactly 10 digits baby!";
    return;
  }

  // Capture the details if everything passed
  let choiceNote = "";
  if (travelRange.value === "movie") {
    choiceNote = movieGenre.options[movieGenre.selectedIndex].text;
  } else if (!notesContainer.hidden) {
    choiceNote = notes.value.trim();
  }

  // If it gets here, the guess was correct (or it wasn't a movie date)
  output.style.color = "initial"; // Reset text color back to normal
  output.innerHTML = `
    <h2>Preference Submitted! 🎉</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Availability:</strong> ${availableDate}</p>
    <p><strong>Chosen Date:</strong> ${travelRange.options[travelRange.selectedIndex].text}</p>
    ${choiceNote ? `<p><strong>Details/Genre:</strong> ${choiceNote}</p>` : ""}
    <P>Thank you for your submission Baby, feel free to take time daydreaming about Josh in all his glory. Josh will reach out to you by carrier falcon in 7 to 10 buissnes days, you're welcome.</P>
  `;

  form.reset();
  updateNotesField(); 
});