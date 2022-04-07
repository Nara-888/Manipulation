function commonElements(myArr1, myArr2) {

    for(let i =0; i < myArr1.length; i ++){
        for(let j = 0; j <myArr2.length; j++){
            if(myArr1[i] === myArr2[j]){
                console.log(myArr1[i]);
            }
        }
    }

    
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);