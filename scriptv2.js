function requiredField () { 
    let firstNameVide = document.getElementById("first-name").value.length === 0;
    let lastNameVide = document.getElementById("last-name").value.length === 0;
    let messageVide = document.getElementById("message").value.length === 0;
        
    if (!firstNameVide && !lastNameVide && !messageVide){ 
        // create a new div element
     let newDiv1 = document.createElement("div");
     let newDiv2 = document.createElement("div");
     let fullName = document.createElement("h3");
     let newDiv3 = document.createElement("div");
     let paragraph = document.createElement("p");
     paragraph.innerHTML = document.getElementById("message").value;

    newDiv1.className = "flex space-x-4 text-sm text-gray-500";
    newDiv2.className = "flex-1 py-10 border-t border-gray-200";
    fullName.className = "font-medium text-gray-900";
    newDiv3.className = "prose prose-sm mt-4 max-w-none text-gray-500";

     // add the text node to the newly created div
     newDiv3.append(paragraph);
     newDiv2.append(fullName, newDiv3);
     newDiv1.append(newDiv2);
     let commentList = document.getElementById("comment-list");
     commentList.append(newDiv1);

     // and give it some content
     let firstName = document.getElementById("first-name").value;
     let lastName = document.getElementById("last-name").value;
     fullName.innerHTML = (firstName+ " " + lastName);
           
   
     // add the newly created element and its content into the DOM
     let commentaire = document.getElementById("comment");
     commentList.insertBefore(newDiv1, commentaire);
   
       
    } else {
        let errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "unset";	
    } 
 }



