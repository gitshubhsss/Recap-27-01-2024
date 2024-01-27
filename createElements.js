let newHeading=document.createElement("h1");
newHeading.innerText="this is above the body tag";

document.querySelector("body").prepend(newHeading)

let newBtn=document.createElement("button");
newBtn.innerText="click me"
document.getElementById("box").append(newBtn);

