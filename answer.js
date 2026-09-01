// Answer 1

function describeValue(value) {
   let type = typeof value;
   let result;

   if(value){
    result = "truthy";
   }else{
    result = "falsy";
   }
   return `${type} | ${result}`;
}

// Answer 2

function getDayType(day) {

     day = day.toLowerCase();


    let weekend = ["friday", "saturday"];
    let workingDays = ["sunday","monday", "tuesday", "wednesday", "thursday"];

    switch(true){
        case weekend.includes(day):
            return "weekend";
            
        case workingDays.includes(day):
            return "Working Day";
            
        default:
            return "invalid day";  
    }
}


// Answer 3

function validateUsername(username) {
    if(username.length < 4) {
        return "Too short";
        
}else if (username.includes (" ")){
     return "No space allowed"; 

}else if (username.toLowerCase().includes("admin")){
    return "Reserved word";
}
return "Available";


}


