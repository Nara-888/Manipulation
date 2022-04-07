function reverseInPlace(myArray) {

    //reverse the array without creating a new one
    //print result on a single line separated with spaces
    // Create a function to swap two elements inside an array
    // Loop to the half-length of the array

   /* for(let i = 0; i < myArray.length /2; i++){
        let k = myArray.length - 1 - i;
        let temp = myArray[i];
        myArray[i] = myArray[k];
        myArray[k] = temp
    }
    */
   let k = myArray.length - 1;
    for(let i = 0; i < myArray.length /2; i++, k --){
        
        let temp = myArray[i];
        myArray[i] = myArray[k];
        myArray[k] = temp
    }

    

    console.log(myArray.join(' '));

    
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);