let input_field = document.getElementById("input_field")
let submit_btn = document.getElementById("submit")

function generateHexColor(){
    
    let user_input = input_field.value

    if (user_input == ""){
        alert("You Have Not Entered Any Input")
    }
    else if (user_input[0] != "#"){
        alert("You Have Not Started With #")
    }
    else if (user_input.length != 7){
        alert("Your Input Is Incorrect\n It Must Be 7 Digits")
    }
    
    else{
        document.body.style.backgroundColor = user_input
        
    }
}


submit_btn.addEventListener("click", generateHexColor)