console.log("Ejercicio 12");
let notas=[5,5,7];

function mediaNotas(arr=[]){
    let media=0;
    for (let i=0; i<arr.length; i++){
        media+=arr[i];
        
    }
    media=media/arr.length;
    return media;
}
console.log(mediaNotas(notas));
function mediaNotas2(arr=[]){
    let media=0;
    arr.forEach(element => {
        media+=element;
    });
    return media/arr.length;
}
console.log(mediaNotas2(notas));

function mediaNotas3(arr=[]){
    let media=0;
    let i=0;
    do{media+=arr[i]; i++;}while(i<arr.length);
    return media/arr.length;
}
console.log(mediaNotas3(notas));