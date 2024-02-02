function requiredField () { 
     let firstNameVide = document.getElementById("first-name").value.length === 0;
     let lastNameVide = document.getElementById("last-name").value.length === 0;
     let messageVide = document.getElementById("message").value.length === 0;
     	
     if (firstNameVide || lastNameVide || messageVide){ 
        let errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "initial";	
     } else {
      // create a new div element
      let newDiv1 = document.createElement("div");
      newDiv1.classList.add("flex space-x-4 text-sm text-gray-500");
      let newDiv2 = document.createElement("div");
      newDiv2.classList.add("flex-1 py-10 border-t border-gray-200");
      let fullName = document.createElement("h3");
      fullName.classList.add("font-medium text-gray-900");
      let newDiv3 = document.createElement("div");
      newDiv3.classList.add("prose prose-sm mt-4 max-w-none text-gray-500");
      let paragraph = document.createElement("p");
      paragraph.innerHTML = document.getElementById("message").value;

      // add the text node to the newly created div
      newDiv3.appendChild(paragraph);
      newDiv2.appendChild(fullName);
      newDiv2.appendChild(newDiv3);
      newDiv1.appendChild(newDiv2);
      let commentList = document.getElementById("comment-list");
      commentList.appendChild(newDiv1);

      // and give it some content
      let firstName = document.getElementById("first-name").value;
      let lastName = document.getElementById("last-name").value;
      fullName.innerHTML = `${firstName}+ " " + ${lastName}`;
            
    
      // add the newly created element and its content into the DOM
      let commentaire = document.getElementById("comment");
      commentList.insertBefore(newDiv1, commentaire);
    }
  }



