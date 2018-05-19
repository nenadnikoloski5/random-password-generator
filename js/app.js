var app = (function() {

    'use strict';


    const generatePassword = document.getElementsByClassName("btn btn-primary");
    const passLength = document.getElementsByClassName("form-control input-sm");
    const capitalLetters = document.getElementById("capital-letters");
    const lowerCaseLetters = document.getElementById("lowercase-letters");
    const numbers = document.getElementById("numbers");
    const specialChars = document.getElementById("specialChars");

    generatePassword[0].addEventListener("click", createPassword)



    function createPassword(){

        let possiblePasswords = [];
        const capitalLettersList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        const lowercaseLettersList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

        const numbersList = ["0","1","2","3","4","5","6","7","8","9",]

        let all = document.querySelectorAll("input[type='checkbox']")
        
        if(capitalLetters.checked){
            capitalLettersList.forEach(function(ele){
                possiblePasswords.push(ele)
            })
        }


        if(lowerCaseLetters.checked){
            lowercaseLettersList.forEach(function(ele){
                possiblePasswords.push(ele)
            })
        }

        if(numbers.checked){
            numbersList.forEach(function(ele){
                possiblePasswords.push(ele)
            })
        }



        // This is for the special characters
        for(let i = 0; i < all.length; i++){
            if(all[i].checked && all[i].className == "special-chars"){
                possiblePasswords.push(all[i].nextElementSibling.textContent)
    
            }
        }

        // This is to render the final password
        let finalPassword = ""
        
        for(let i = 0; i < passLength[0].value; i++){
            let randomChar = Math.floor( Math.random () * (possiblePasswords.length - 0 )) + 0;
            
            finalPassword += possiblePasswords[randomChar]
            
        }
        if(finalPassword.includes("undefined")){
            finalPassword = "notPassword123 :)"
        } 
        document.getElementsByClassName("support")[0].textContent = finalPassword
    }


})();