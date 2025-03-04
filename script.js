function check(){
    let message = prompt("Enter a message:");
    let string1 = "FR", string2 = "AI", string3 = "aI", string4 = "Ai";

    let element = document.getElementById('result');

    if(message.indexOf(string1) != -1){
        if(message.indexOf(string3) != -1 || message.indexOf(string4) != -1){
            element.innerHTML = "The message " + "\"" + message + "\" " + "is fake!";
        }else{
            element.innerHTML = "The message " + "\"" + message + "\" " + "is legitimate!";
        }
    }else if (message.indexOf(string2) != -1 || message.indexOf(string3) != -1 || message.indexOf(string4) != -1){
        element.innerHTML = "The message " + "\"" + message + "\" " + "is fake!";
    }else{
        element.innerHTML = "The message " + "\"" + message + "\" " + "is not yet encoded!";
    }

}