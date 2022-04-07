function magicSum(arr,magicNum){
    
    for(let i = 0; i < arr.length -1; i ++){
        let currentElement = arr[i];
        for(let index = i + 1; index < arr.length; index++){
            let nextElement = arr[index];
            let sum = currentElement + nextElement;
            if(sum === magicNum){
                console.log(`${currentElement} ${nextElement}`);
            }
        }
    }
    
}
magicSum([1, 7, 6, 2, 19, 23],8)