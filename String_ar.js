ar=["Aditya","Roshni","Aditi","Rohan","Ramesh","Varun","Kiran","Sujita","Karan","Suresh"];
const result = ar.filter(checkLength);
function checkLength(word){
    if (word.length<6){
        return word
    }
}

console.log(result,"\n");

ar2=["Aditya","Roshni","Aditi","Rohan","Ramesh","Varun","Kiran","Sujita","Karan","Suresh"];
const result2 = ar2.forEach(checkLength2);
function checkLength2(word2){
    if (word2.length<6){
        return word2
    }
}

console.log(result2,"\n");


ar3=["Aditya","Roshni","Aditi","Rohan","Ramesh","Varun","Kiran","Sujita","Karan","Suresh"];
const result3 = ar3.map(checkLength3);
function checkLength3(word3){
    if (word3.length<6){
        return word3
    }
}

console.log(result3);
