let type:'as-number' | 'as-string';
function combine1(a:number | string, b:number | string,type:'as-number' | 'as-string'){
    if(type === 'as-number'){
        return (+a)+(+b);
    }
    else{
        return a.toString() + b.toString();
    }
}
console.log(combine1(20,10,"as-number"))
console.log(combine1("Rih","Rathaur",'as-string'))