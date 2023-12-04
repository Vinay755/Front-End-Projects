function avg(numbers){
    if(numbers.length==0){
    return null

    }
    let sum = 0;
    for(i=0;i<numbers.length;i++){
        sum+= numbers[i]
    }
    const average = sum / numbers.length;
    return average;
}
const numbersArray = [1, 2, 3, 4, 5];
const averageValue = avg(numbersArray);

console.log("Array:", numbersArray);
console.log("Average:", averageValue);