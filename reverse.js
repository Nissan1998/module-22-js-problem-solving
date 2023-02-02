function reversString(text){
    let reverse = '';
    for(let i = text.length -1; i>=0; i--){
        let element = text[i];
        reverse = reverse + element;
    }
    return reverse
}

const string ='I am a good persion';
let reversed = reversString(string);
console.log(reversed);