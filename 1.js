let kata ="katakd"
let bKata =""

for(let i = kata.length - 1; i >= 0; i--){
    bKata += kata[i]
}
if(kata === bKata){
    console.log(true);
}
else{
    console.log(false);
}




