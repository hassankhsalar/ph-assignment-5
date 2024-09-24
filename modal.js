// Get modal element
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const openModalBtn = document.getElementById('openModalBtn');

// Get the <span> element that closes the modal
const closeSpan = document.querySelector('.close');

// Get the OK button inside the modal
const okBtn = document.getElementById('okBtn');

// Check if elements are found in the DOM
console.log(modal, openModalBtn, closeSpan, okBtn); // Debugging: check elements in console

// When the user clicks the button, open the modal
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block'; // Display the modal
  console.log("Modal opened"); // Debugging
});

// When the user clicks on <span> (x), close the modal
closeSpan.addEventListener('click', function() {
  modal.style.display = 'none'; // Hide the modal
  console.log("Modal closed by X"); // Debugging
});

// When the user clicks the OK button, close the modal
okBtn.addEventListener('click', function() {
  modal.style.display = 'none'; // Hide the modal
  console.log("Modal closed by OK button"); // Debugging
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none'; // Hide the modal if outside click
    console.log("Modal closed by outside click"); // Debugging
  }
});