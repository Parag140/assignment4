const divs = document.getElementById("output"); 
const butti = document.getElementsByTagName("button")[0]; 
const defaultText = divs.innerText;
butti.onclick = function () {
    if(divs.innerText === defaultText) {
        document.body.style.backgroundColor = "lightblue"; 
        divs.innerText = "message:clicked me!";
        alert("text chnaged")
        divs.style.color = "yellow"
        divs.style.margin = "5px";
        divs.style.padding = "5px";
        divs.style.fontStyle = "italic";
    }
    else{
        divs.innerText = defaultText;
        document.body.style.backgroundColor = "rgb(85, 85, 85)";
        divs.style.color = "blue";
        divs.style.color = "yellow"
        divs.style.margin = "5px";
        divs.style.padding = "5px";
        divs.style.fontStyle = "italic";
    }
};
