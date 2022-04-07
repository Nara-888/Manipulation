function maxSequenceOfEqualElements(array1) {
    let newArray = [];
    let firstArray = [];

    for(let i = 0; i <array1.length; i++){
        firstArray = [] // refresh the first array every step
        for(let j = i; j < array1.length; j++){
            if(array1[i] === array1[j]){
                firstArray.push(array1[j]);

            }else{
                break;
            }
        }
        if(firstArray.length > newArray.length){
            newArray = firstArray;
        }
    }
    console.log(newArray.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])