let arr=[1,58,5,78,45];

let even=(values)=>{
    if(values%2===0)
    {
       return values;
    }
}
let newArr=arr.filter(even)
console.log(newArr);