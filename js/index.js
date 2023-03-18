const loopThroughArray = function(array){
    for (const items of array) {
        console.log(items);        
    }
}

const capilalizeArray = function (array){
  let  newArray = []
    for (const item of array) {
        newArray.push(item.toUpperCase());
    }
    console.log(newArray);
}


function handleArray(fun){
    let books =['Eloquent Javascript','Javascript :the good parts',
    'Learn Javascript visually','You don\'t know Javascript',
    'JAVSCRIPT :The definitive guide']
    fun(books);
}
handleArray(loopThroughArray)
handleArray(capilalizeArray)
