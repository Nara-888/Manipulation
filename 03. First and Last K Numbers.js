function firstAndKNumbers(array) {
    // slice is Exclusive
    let k = array.shift();

   let  firstK = array.slice(0,k);
   let lastK = array.slice(-k)
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
    
        
}
firstAndKNumbers([2, 7, 8, 9]);
firstAndKNumbers([3,6, 7, 8, 9]);


