var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
  let newArray=[];
	people.forEach((element,index) => {


        if(element == personName){
    
        }
        else{
            newArray.push(element);
        }
        
        
        
    });

    return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));