function array_add(ar,n){
    ar2=[];
    for (var i=0; i<ar.length; i++){
        ar2[i]=ar[i]+n;
    }
    return ar2;
}

console.log(array_add([1,2,3],2));