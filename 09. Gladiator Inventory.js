function gladiatorInventory(inventory) {

    let currentInventory = inventory.shift().split(' ');
    for (let command of inventory) {
        let currentCommand = command.split(' ');
        
        let action = currentCommand[0];
        let item = currentCommand[1];
        if (action === "Buy") {
            if (!currentInventory.includes(item)) {
                currentInventory.push(item)
            }

            
        }else if(action === "Trash"){
            if (currentInventory.includes(item)) {
                let indexOfItem = currentInventory.indexOf(item);
                currentInventory.splice(indexOfItem, 1);
            }

        }else if(action === "Repair"){
            if (currentInventory.includes(item)) {
                let indexOfItem = currentInventory.indexOf(item);
                currentInventory.splice(indexOfItem, 1);
                currentInventory.push(item);
                
            }
        }else if(action === "Upgrade"){
            let upgraded = item.split('-');
            let mainItem = upgraded[0];
            let extension = upgraded[1];
            
            if (currentInventory.includes(mainItem)) {
                
                let indexOfItem = currentInventory.indexOf(mainItem);
                currentInventory.splice(indexOfItem + 1, 0, upgraded.join(':'));
            }
        }

    }
    console.log(currentInventory.join(' '));
    
    
    
}
gladiatorInventory(
['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])