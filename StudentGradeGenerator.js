//Write a program that prompts the user to input student marks. 
//The input should be between 0 and 100. 
//Then output the correct grade: 
//A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
function StudentGradeGenerator(studentMark){
    if(studentMark>79){
    return output="A"
}
else if(studentMark=>60 && studentMark<=79){
    return output="B"
}
else if(studentMark>49 && studentMark<=59){
    return output="C"
}
else if(studentMark=>40 && studentMark<=49){
    return output="D"
}
else(studentMark<40)
    return output="B"
}
//input Grade here
console.log (StudentGradeGenerator())