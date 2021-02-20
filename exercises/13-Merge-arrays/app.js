var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    let i=0;
    firstArray.forEach((element,index) => {
        
        newArray[i]=element;
        i++
        
    });
        secondArray.forEach((element,index) => {
        
        newArray[i]=element;
        i++
        
    });

    
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));