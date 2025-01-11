const authorDiv = document.querySelector(".author");
const shareDiv = document.querySelector(".share");
const toggleButtons = document.querySelectorAll(".toggle__btn");
const image = document.querySelector(".btn__image");
const authorButton = document.getElementById("author__btn");
const shareButton = document.getElementById("share__btn");
const shareImg = document.getElementById("share__img");


// Sets the initial display state of the shareDiv to "none" to ensure correct toggling
shareDiv.style.display = "none";


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
        shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
        shareImg.style.filter = "invert(100%) brightness(200%)";
      }
    } else {
      authorDiv.style.display = "flex";
if(shareDiv.style.display == "none"){
shareDiv.style.display = "flex";
button.style.backgroundColor = "hsl(214, 17%, 51%)";
image.style.filter = "invert(100%) brightness(200%)";//This combination ensures that the image becomes white, regardless of its original color
}
else{
shareDiv.style.display = "none";
image.style.filter = "none"; 
button.style.backgroundColor = "rgb(240, 240, 240)";
}
    }
  });
});

function updateShareDiv() {
  
  if (window.innerWidth > 800) {
    authorDiv.style.display = "flex";
    
  } else {
    if (authorDiv.style.display === "none") {
      authorDiv.style.display = "none";
      shareDiv.style.display = "flex";
    } else {
      image.style.filter = "none"; 
      authorButton.style.backgroundColor = "rgb(240, 240, 240)";
      authorDiv.style.display = "flex";
      shareDiv.style.display = "none";
    }
  }
//Keep the color of the button if we change screen size from small to big and share div is visible
if (window.innerWidth > 800 && shareDiv.style.display == "flex" ) {
authorButton.style.backgroundColor = "hsl(214, 17%, 51%)";
image.style.filter = "invert(100%) brightness(200%)";
}
}

// Initial setup
updateShareDiv();
// Handle resize events
window.addEventListener("resize", updateShareDiv);
