function addElement () {
let newDiv1 = document.createElement("div");
let newDiv2 = document.createElement("div");
let fullName = document.createElement("h3");
let newDiv3 = document.createElement("div");
let paragraph = document.createElement("p");
let text = document.createTextNode("This is new.")
 // add the text node to the newly created div
 paragraph.appendChild(text);
 newDiv3.appendChild(paragraph);
 newDiv2.appendChild(fullName);
 newDiv2.appendChild(newDiv3);
 newDiv1.appendChild(newDiv2);

// and give it some content
fullName.innerHTML = `bbbbbbbbbbbbbb`;
document.body.appendChild(newDiv1);
}