// the script that handles the modal (popup)

// reference the html elements
var modal = document.getElementById("modal");
var modalButton = document.getElementById("modalButton");
var isDisplay = 0; // value to check whether the modal is being displayed

// set default values
modal.style.display = "none";
modalButton.innerHTML = "about";

modalButton.onclick = function() {
    if (isDisplay == 0) { // if the modal is not being displayed, then
        isDisplay = 1;
        modal.style.display = "block"; // show the modal
        modalButton.innerHTML = "close"; // set the button's text to "close"
    } else { // if the modal is being displayed, then
        isDisplay = 0;
        modal.style.display = "none";
        modalButton.innerHTML = "about";
    }
}