





export function findByName(someArray, name) {
    
    for (let i = 0; i < someArray.length; i++){
      const item = someArray[i];
        if (item.name === name) {
            
            return item;
        }
    }
}
