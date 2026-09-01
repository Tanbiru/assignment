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

// answer 4

function getCngFare(distance , isNight = false ,waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2){
        fare += (distance - 2) * 15;
        fare += waitingMinutes * 2;

    if(isNight ){
        fare *= 1.20;
    }
    }else if (isNight){
        fare += waitingMinutes * 2;
        fare *=1.20;
    }else{
        fare += waitingMinutes * 2;
    }
      return fare;

}


// Answer 5

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
