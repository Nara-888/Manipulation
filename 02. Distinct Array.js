function distinctArrays(someArray){
    //SOLVE 1

    for (let i = 0; i < someArray.length; i++) {
        let currentElement = someArray[i];
        for (let j = i + 1; j < someArray.length; j++) {
            let nextElement = someArray[j]
            if (currentElement === nextElement) {
                someArray.splice(j, 1);    // removes one element from j index
                j = j - 1;
                
            }
            
        }
        
    }
    console.log(someArray.join(' '));
}

//distinctArrays([1, 2, 3, 4]);
//distinctArrays([7, 8, 9, 7, 2, 3, 4, 1, 2])

// solve 2

function distArray(myArr) {
    let newArr = [];
    for (let number of myArr) {
        if (!newArr.includes(number)) {
            newArr.push(number)
        }
    }
    console.log(newArr.join(' '));
}
distArray([7, 8, 9, 7, 2, 3, 4, 1, 2])

// solve 3

function fn(array) {
    let newArray = [];
    array.map((currNum) => {
        if (!newArray.includes(currNum)) {
            newArray.push(currNum);
        }
    })

    console.log(newArray.join(' '));
}
fn(([7, 8, 9, 7, 2, 3, 4, 1, 2]))


