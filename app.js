const authorDiv = document.querySelector(".author");
const shareDiv = document.querySelector(".share");
const toggleButtons = document.querySelectorAll(".toggle__btn");
const shareButton = document.getElementById("share__btn");
const toggleBtn = document.getElementById("toggle__button");

// Get references to the elements
const imgElement = document.getElementById("author__avatar");
const pElement = document.querySelector(".author__data");

// Group them into a single object
const authorObject = {
  image: imgElement,
  text: pElement,
  button: toggleBtn,
};

// Add click event listeners to both buttons
toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Check if the screen width is less than 800px (50rem)
    if (window.innerWidth < 800) {
      // Check which div is currently visible
      if (shareDiv.style.display == "flex") {
        // Show the author div and hide the share div
        authorObject.image.style.display = "flex";
        authorObject.text.style.display = "flex";
        authorObject.button.style.display = "flex";
        shareDiv.style.display = "none";
      } else {
        // Show the share div and hide the author div
        authorObject.image.style.display = "none";
        authorObject.text.style.display = "none";
        authorObject.button.style.display = "none";
        shareDiv.style.display = "flex";
        authorDiv.style.padding = "0";
      }
    } else {
      shareDiv.style.position = "absolute";
      toggleBtn.style.position = "relative";
      authorDiv.style.position = "relative";
      shareDiv.style.right = "-2rem"; // Align it to the right of the button
      shareDiv.style.top = "-5rem";
      shareButton.style.display = "none";

      if (shareDiv.style.display === "none") {
        // Show the author div and hide the share div
        shareDiv.style.display = "flex";
      } else {
        // Show the share div and hide the author div
        shareDiv.style.display = "none";
      }
    }
  });
});

// Initial setup
updateShareDiv();
// Handle resize events
window.addEventListener("resize", updateShareDiv);
