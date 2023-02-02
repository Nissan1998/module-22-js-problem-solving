function minNumber(numbers){
    let getMinNumber = numbers[0]
    for(let i = 0; i< numbers.length; i++){
        let element = numbers[i];
        if(element<getMinNumber){
            getMinNumber = element
        }
    }
    return getMinNumber;
}


let myNumber = [50,80,70,100,500,5];
let minimumNumber = minNumber(myNumber)
console.log(minimumNumber);