let boxes=document.getElementsByClassName("box");
let cnt=0;
for (const value of boxes) {
   cnt++;
   value.innerText=cnt;
}