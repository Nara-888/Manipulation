function ladyBugs(myArray) {

    let field = Array(myArray[0]).fill(0);
    let ladyBugs = myArray[1].split(' ');
    console.log(ladyBugs);
    for (let i = 0; i < ladyBugs.length; i++) {
        if (field[ladyBugs[i]] === 0) {
            field[ladyBugs[i]] = 1;
        }
        
    }
    for (let i = 2; i < myArray.length; i++) {
        let command   = myArray[i].split(' ');
        
        let direction = command[1];
        let currentSpot = Number(command[0]);
        let moves = Number(command[2]);
        switch(direction){
            case "right":
                if(field[currentSpot] === 1){
                    field[currentSpot] = 0;
                    while(field[currentSpot + moves] !== 0 && currentSpot + moves < field.length){
                        moves += moves;
                    }
                    if (field[currentSpot + moves] === 0) {
                        field[currentSpot + moves] = 1;
                    }
                }
                break;
            case "left":
                if (field[currentSpot] === 1) {
                    field[currentSpot] = 0;
                    while (field[currentSpot - moves] !== 0 && currentSpot - moves >= 0) {
                        moves += moves;
                    }
                    if (field[currentSpot - moves] === 0) {
                        field[currentSpot - moves] = 1;
                        
                    }
                }
                break;

        }
        
    }
    

    
}
ladyBugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]);
ladyBugs([ 5, '3',
'3 left 2',
'1 left -2']);