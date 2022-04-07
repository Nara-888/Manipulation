function arrayManipulations(originalArray) {
    let arrayForManipulation = originalArray.shift().split(' ');
    for (let element of originalArray) {
        let currentElement = element.split(' ');
        let command = currentElement[0];
        let item = currentElement [1];
        switch (command) {
            case "Add":
                arrayForManipulation.push(item);
                
                break;
        
            case "Remove":
                if (arrayForManipulation.includes(item)) {
                    while(arrayForManipulation.includes(item)){
                        let indexOfItem = arrayForManipulation.indexOf(item);
                    arrayForManipulation.splice(indexOfItem, 1)
                    }
   
                }

                break;
            case "RemoveAt":
                
                arrayForManipulation.splice(item, 1);

                break;
            case "Insert":
                let indexToPlaceAt = currentElement[2];
                arrayForManipulation.splice(indexToPlaceAt, 0 , item);
                break;
        }
    }

    console.log(arrayForManipulation.join(' '));
    
}
arrayManipulations(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3'])
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])