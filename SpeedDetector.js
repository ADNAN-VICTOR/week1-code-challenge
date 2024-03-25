//Write a program that takes as input the speed of a car.
// If the speed is less than 70, it should print “Ok”. 
function SpeedDetector(speed){
    if(speed<70)
    return "Ok"
//Otherwise, for every 5 km/s above the speed limit (70), 
//it should give the driver one demerit point and print the total number of demerit points.
    else 
    points= (speed-70)/5
     if(points<=12)
     return points
 //If the driver gets more than 12 points, the function should print: “License suspended”.
        else 
        return "License suspended"
}
// INPUT SPEED HERE
console.log(SpeedDetector(0))