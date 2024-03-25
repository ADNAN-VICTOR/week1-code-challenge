//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
function calculateNetSalary(basicSalary,benefits){
    //calculates gross salary
    grossSalary = basicSalary + benefits
    //calculates nssf deduction
    nssfDeduction = 0.06 * basicSalary
    //calculates taxable income
    taxableIncome= grossSalary - nssfDeduction
    //places taxable income in its tax bracket
    if ( taxableIncome <= 24000){
        taxRate= 0.10 
        payee=taxableIncome*taxRate
    }
    else if (taxableIncome <= 32333){
        taxRate= 0.25
        payee=(taxableIncome-24000)*taxRate+2400
    } 
    else if (taxableIncome >32333){
        taxRate= 0.30
        payee=(taxableIncome-32333)*taxRate+2400+2083.25
    } 
    //uses gross salry to get nhif deduction bracket
    if (grossSalary <= 5999){
        nhif_deduction = 150 
    }
    else if (grossSalary <= 7999){
        nhif_deduction = 300
    } 
    else if (grossSalary <= 11999){
        nhif_deduction = 400
    } 
    else if (grossSalary <= 14999){
        nhif_deduction = 500
    }
    else if (grossSalary <= 19999){
        nhif_deduction = 600
    }
    else if (grossSalary <= 24999){
        nhif_deduction = 700
    }
     else if (grossSalary <= 29999) {
        nhif_deduction = 800
     }
     else if (grossSalary <= 34999){
        nhif_deduction = 900
     }
     else if (grossSalary <= 39999){
        nhif_deduction = 950
    } 
    else if (grossSalary <= 44999){
        nhif_deduction = 1000
    } 
    else if (grossSalary <= 49999){
        nhif_deduction = 1100
    }
    else if (grossSalary <= 59999){
        nhif_deduction = 1200
    }
    else if (grossSalary <= 69999){
        nhif_deduction = 1300
    }
     else if (grossSalary <= 79999) {
        nhif_deduction = 1400
     }
     else if (grossSalary <= 89999){
        nhif_deduction = 1500
     }
     else if (grossSalary <= 99999) {
        nhif_deduction = 1600
     }
     else if (grossSalary >= 100000){
        nhif_deduction = 1700
     }
    
     //calculates net salary
    netSalary = taxableIncome - payee - nhif_deduction 
    return netSalary   
    }
//input basic salary and benefits here
    console.log(calculateNetSalary(0,0))