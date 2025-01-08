const authorDiv = document.querySelector(".author");
const shareDiv = document.querySelector(".share");
const toggleButtons = document.querySelectorAll(".toggle__btn");

// Add click event listeners to both buttons
toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Check if the screen width is less than 800px (50rem)
    if (window.innerWidth < 800) {
      // Check which div is currently visible
      if (authorDiv.style.display === "none") {
        // Show the author div and hide the share div
        authorDiv.style.display = "flex";
        shareDiv.style.display = "none";
      } else {
        // Show the share div and hide the author div
        authorDiv.style.display = "none";
        shareDiv.style.display = "flex";
      }
    } else {
      authorDiv.style.display = "flex";
if(shareDiv.style.display == "none"){
shareDiv.style.display = "flex";
}
else{
shareDiv.style.display = "none";
}
    }
  });
});

function updateShareDiv() {
  // Check if the screen width is less than 800px (50rem)
  if (window.innerWidth > 800) {
    authorDiv.style.display = "flex";
    
  } else {
    if (authorDiv.style.display === "none") {
      // Show the author div and hide the share div
      authorDiv.style.display = "none";
      shareDiv.style.display = "flex";
    } else {
      // Show the share div and hide the author div
      authorDiv.style.display = "flex";
      shareDiv.style.display = "none";
    }
  }
}

// Initial setup
updateShareDiv();
// Handle resize events
window.addEventListener("resize", updateShareDiv);
