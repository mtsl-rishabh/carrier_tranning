let sum = (...arr) => {
    let s=0;
    
    for(let i in arr)
    {
         s=s+arr[i]/2;
    }
    document.write("Average of array is =");
    document.write(s);
};

let arr=[10,20,30];

sum(...arr);