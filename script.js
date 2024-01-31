function requiredField() { 
     let firstNameVide = document.getElementById("first-name").value.length == 0;
     let lastNameVide = document.getElementById("last-name").value.length == 0;
     let messageVide = document.getElementById("message").value.length == 0;
     	
     if (firstNameVide || lastNameVide || messageVide){ 
        let errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "unset";	
     }
    }