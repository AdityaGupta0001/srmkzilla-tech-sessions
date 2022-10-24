const x=[],y=[];
for (let i=0; i<5; i++){
        x[i]=i+5;
}
console.log(x);
var Num=65;
for (let i=0; i<5; i++){
    y[i]=String.fromCharCode(Num);
    Num+=1;
}
console.log(y);

function Hello(a,b){
    let concatinated = a.concat(b);
    return concatinated;
}

console.log(Hello(x,y));

var func2 = (a,b) => {
    console.log(a.toString());
    console.log(b.toString());
    
}

func2(x,y);