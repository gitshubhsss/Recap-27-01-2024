let boxes=document.getElementsByClassName("box");
let cnt=0;
for (const value of boxes) {

   value.innerText=`box no : `+ cnt;
   cnt++;
}