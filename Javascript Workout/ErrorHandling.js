// Error = an object that is created to represent a problem that occurs
// occur often with user input or establishing a connection

// -------------- HOW TO HANDLE ERRORS -----------------------
// try{} = encloses code that might potentially causes an error
// catch{} = catch and handle any thrown errors from try{}
// finaly{} = optional, always executes. used mostly to clean up
// close files, close conections and release resources

try {
    console.log(x);
}
catch(error) {
    console.log(error);
}

finally {
    // this will always output
}