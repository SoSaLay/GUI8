class Patient{
    #name;
    #ssn;

constructor(name, ssn){
this.#name=name;
this.#ssn=ssn;
}

getName(){
    return this.#name
}

getSSN(){
    return this.#ssn
}

}



const patient2= new Patient("John","123-45-6789");

console.log(patient2.name)

console.log(patient2.ssn)

console.log(patient2.getName())

console.log(patient2.getSSN())





// class is a blueprint for creating objects with specific properties and methods.
//  It organizes related data and behaviors.

//  The constructor is a special method used for starting  an object 
//  created within a class.

//  Methods are functions defined inside the class that 
//  describe what abilities the objects from the class can perform.


// Private class fields are #, which means they cannot be 
// accessed directly from outside the class.Preventing it from being accessed 
// or modified directly from outside the class.

// To access these private fields, you need to provide methods within the class 
// that are specifically designed to return (or sometimes modify) these fields.