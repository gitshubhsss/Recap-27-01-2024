let arr=[1,2,3,4,5];
let add=(prev,curr)=>{
    return prev+curr;
}
let ans=arr.reduce(add);
console.log(ans);