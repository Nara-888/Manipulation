function arrayManipulator(currentArr, arrOfComands) {

    for (let currentCommand of arrOfComands) {
        let tokens = currentCommand.split(' ');
        let currentCom = tokens[0];

        if (currentCom === "add") {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            currentArr.splice(index,0,element);
            
        }else if (currentCom === "addMany"){
            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let numsToAdd = tokens.map(Number);
            currentArr.splice(index, 0, ...numsToAdd) // concatenating two arrays
        }else if( currentCom === "contains"){
            let result = currentArr.indexOf(Number(tokens[1]));
            console.log(result);
        }else if(currentCom === "remove"){
            let index = Number(tokens[1]);
            currentArr.splice(index, 1);
            
        }else if(currentCom === "shift"){
            let position = Number (tokens[1]);
            for (let i = 0; i < position; i++) {
                let firstNum = currentArr.shift();
                currentArr.push(firstNum);
                
            }
        }else if(currentCom === "sumPairs"){
            let resultArray = [];
            if (currentArr.length % 2 !== 0) {
                currentArr.push(0);// to easily sum pairs
  
            }
            for (let i = 0; i < currentArr.length - 1; i+= 2) {
                let sum = currentArr[i] + currentArr[i + 1];
                resultArray.push(sum);
                
            }
            currentArr = resultArray;

        }else if(currentCom === 'print'){
            console.log(`[ ${currentArr.join(', ')} ]`);
        }
        //console.log(currentArr);
        
    }
    
}
//arrayManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print'])
//arrayManipulator([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
arrayManipulator([2, 2, 4, 2, 4],["add 1 4", "sumPairs", "print"])