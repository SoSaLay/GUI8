class Person{

    constructor(name,job,age){
        this.name=name;
        this.job=job;
        this.age=age;
    }

    exercise(){
        console.log("Running is fun! - said no one ever")
    }

    fetchJob(){
        console.log(`${this.name} is a ${this.job}`)
    }

    
}


// when a class extends another class, the super keyword is needed in the 
// constructor of the subclass to ensure that 
// parent class makes the properties available for use.

class Programmer extends Person{

    constructor(name,job,age, languages){
        super(name,job,age);
        this.languages=languages
        this.busy=true;
    }
    // you don’t have to include properties like busy in the constructor 
    // arguments if you intend to set them to a fixed initial value.
    //  Busy is initialized to true directly within the constructor, 
    // indicating that a new Programmer is busy by default when created.


    completeTask(){
        this.busy=false;
    }

    acceptNewTask(){
        this.busy=true;
    }


    offerNewTask(){
        this.busy? console.log(`${this.name} can't accept any new task right now`): console.log(`${this.name} would love to take on this job`)

    }

    learnLanguage(newLang){
        this.languages.push(newLang)

    }

    listLanguage(){
        return this.languages.join(",")
    }

    // When a new Programmer is created, the constructor needs to be filled with a  
    // value of language.
    
    // it's reasonable to expect that the constructor will often need to handle 
    // multiple programming languages, since programmers typically know more 
    // than one language. However, when someone initializes a new Programmer 
    // instance, particularly if another developer is using your code, 
    // they might not remember to pass the languages as an array,
    // or they might not pass any languages at all.

    // To avoid issues after initializing, you can set a default value of 
    // an empty array with languages = [] in the constructor argument
    

    //  Alternatively, to ensure that any input is treated as an array, 
    //  you can use the following: this.languages = Array.isArray(languages) ? languages : [languages];. 
    //  This checks if the input is an array and uses it directly if true, 
    //  or wraps it in an array if it’s not. So your methods that rely on array
    //  beign present will always works
   

}


const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
