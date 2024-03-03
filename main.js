const imagi = document.querySelector("img");
let myHeading = document.querySelector("h1");
const button = document.querySelector(".button");


/* Start of Functions */
function getUserName(){
    let myName = "";
    while(myName ==="" | myName === null){
        myName = prompt("What is your Name:");
        localStorage.setItem("name", myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
    }
    /* End of Functions */

    /* Start Main JS */
imagi.onclick = () => {

    const src = imagi.getAttribute("src");
    if(src === "images/Mozilla_Firefox_3.5_logo.png") {
        imagi.setAttribute("src", "https://www.freepnglogos.com/uploads/minecraft-logo-27.png");
    }
    else {
        imagi.setAttribute("src", "https://preview.redd.it/avjal33hpqo61.png?width=512&format=png&auto=webp&s=b652d83347448df74c8ba61c17b322e686ee32a4");
    }
}


if(!localStorage.getItem("name")){
    getUserName();
}
else{
    const username = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + username;
}

button.onclick = () => {
    getUserName();
}