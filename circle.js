const radius=[58,5,5,58,55];

const area=function(radius){
    return Math.PI*radius*radius;
}
const daimeter=function(radius){
    return 2*radius;
}
const cicumference=function(radius){
    return 2*Math.PI*radius;
}



const calculate=function(radius,logic){
    const update=[];
    for(let i=0;i<radius.length;i++){
        update.push(logic(radius[i]));
    }
    return update;
}


console.log(calculate(radius,area));
console.log(calculate(radius,daimeter));
console.log(calculate(radius,cicumference));