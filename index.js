// Write your code here!
const mainElement = document.querySelector("#main");
mainElement.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id attribute of the new <h1> element to "victory"
newHeader.id = "victory";

// Set the text content of the new <h1> element to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion";

// Append the new <h1> element to the document body
document.body.appendChild(newHeader);