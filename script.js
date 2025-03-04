function check(){
    let message = prompt("Enter a message:");

    let element = document.getElementById('result');

    if(message.indexOf("FR") != -1){
        if(message.indexOf("aI") != -1 || message.indexOf("Ai") != -1){
            element.innerHTML = "The message " + "\"" + message + "\" " + "is tampered with!";
        }else{
            element.innerHTML = "The message " + "\"" + message + "\" " + "is legitimate!";
        }
    }else if (message.indexOf("AI") != -1 || message.indexOf("aI") != -1 || message.indexOf("Ai") != -1){
        element.innerHTML = "The message " + "\"" + message + "\" " + "is tampered with!";
    }else{
        element.innerHTML = "The message " + "\"" + message + "\" " + "is not yet encoded!";
    }

}
