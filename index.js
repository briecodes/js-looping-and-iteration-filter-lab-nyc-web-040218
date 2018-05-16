function findMatching(drivers, string){
    const newArray = []
    for (const name of drivers){
        if (name.toLowerCase() === string.toLowerCase()){
            newArray.push(name);
        }
    }
    return newArray;
}

function fuzzyMatch(drivers, string){
    const num = string.length;
    const newArray = [];
    for (const name of drivers){
        if (name.substring(0,num) === string){
            newArray.push(name);
        }
    }
    return newArray;
}

function matchName(drivers, string){
    const newArray = [];
    for (const person of drivers){
        if (person["name"] === string ){
            newArray.push(person);
        }
    }
    return newArray;
}