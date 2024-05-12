function sharePizza(slices, people){

    if(people===0){
        return "Can't divide by zero";
    }
    
    const slicePerPerson= slices/people
    return `Each person gets ${slicePerPerson.toFixed(2)} slices of pizza; from our ${slices} slice pizza`;
    //toFixed is a function to round numbersd base on specified decimal places.
    //In this case 2
    
    
    }
    console.log(sharePizza(8, 2)); 
    console.log(sharePizza(8, 3)); 
    console.log(sharePizza(21, 20)); 
    console.log(sharePizza(10, 3)); 
    