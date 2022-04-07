function bombNumbers(sequence, bombNum) {
    let bombNumber = bombNum[0];
    let bombRadius = bombNum[1];

    let indexOfBomb = sequence.indexOf(bombNumber); // find the index of the bomb
    while(indexOfBomb !== -1){
        let startExplosionIndex = Math.max(0, indexOfBomb - bombRadius);
        let explosionLength = bombRadius * 2 + 1;
        sequence.splice(startExplosionIndex, explosionLength);
        indexOfBomb = sequence.indexOf(bombNumber); // new index of the bomb after the explosion
    }

    let sum = sequence.reduce((a,b) => a + b, 0); // summing  nums in the arr starting from a specific index
    //let sum = 0;
   // for (let number of sequence) {
       // sum += number;
    //} // does same as Reduce 
    console.log(sum);


}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])