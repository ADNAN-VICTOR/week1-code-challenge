//Write a program that prompts the user to input student marks. 
function StudentGradeGenerator(studentMark){
//The input should be between 0 and 100. 
if (studentMark>100 || studentMark<0){
    return output="errror"
}
// uses student marks to output appropriate grade
else if(studentMark>79){
    return output="A"
}
else if(studentMark>59 ){
    return output="B"
}
else if(studentMark>49 ){
    return output="C"
}
else if(studentMark>39 ){
    return output="D"
}
else(studentMark<40)
    return output="E"
}
//input Grade here
console.log (StudentGradeGenerator())
