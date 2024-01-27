//if we want the square of numbers in the form of array will just use map funtion
let arr=[1,2,3,4,5];

let square=(values)=>{
    return values*values;
}

let newArr=arr.map(square);
console.log(newArr);