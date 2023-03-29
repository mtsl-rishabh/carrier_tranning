function combine(a:number | string, b:number | string){
    if(typeof a==='number' && typeof b==='number'){
        return a+b;
    }
    else{
        return a.toString() + b.toString();
    }
}
console.log(combine(20,30))
console.log(combine("Rishabh","Rathaur"))