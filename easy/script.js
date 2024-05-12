function exerciseLogger(){
    return function(exercise){
        console.log(`Today's exercise: ${exercise}`)
    }
}


const logExercise= exerciseLogger();

logExercise("Running");
logExercise("Swimming");
logExercise("Dancing");
logExercise("Fencing");


// exerciseLogger returns another function that takes the argument "exercise".
// When you call exerciseLogger() in line 8 it returns this inner function 
// and assigns it to logExercise.

//closure allows you to create a variable (logExercise) 
// that can be used multiple times to log different messages without needing to
// redefine the function or maintain global state.



//  Without using a closure, you would need to pass the exercise directly 
//  to a single function each time, like this:

function logExercise(exercise) {
   console.log(`Today's exercise: ${exercise}`);
}


logExercise("Running");
logExercise("Swimming");
logExercise("Dancing");
logExercise("Fencing");