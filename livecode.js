// In this task you were asked to make a program that this program can establish condition from date, month, and year that had been put. If the date isn't appropriate so output will give information why the day that you have been input isn't appropriate, if the date is appropriate, then we will be check for the month condition, as well as so on for years, special for years we will check is that year includes leap year category or not. 

function header(){
    console.log("---------------------------------------------------");
    console.log(`\t\tMY FIRST TASK`);
    console.log("---------------------------------------------------");
}
header()

function DateIdentification(day, month, year){
    var nameMonth;
    var maxDate;
    switch (month){
        case 1:
            nameMonth = 'January';
            maxDate = 31;
            if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                if(day>maxDate){
                    console.log(`${nameMonth} just have 31 days`)
                }else{
                    console.log(`${day}, ${nameMonth}, ${year}`)
                }
                return nameMonth
            }
        case 2:
            nameMonth = 'February';
            maxDate = 29;
            if (day == 29){
                if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                    console.log(`${year} is a leap year`)
                }else{
                    console.log(`leap year doesn't occur in ${year}`)
                }
            }else if(day>28){
                if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                    console.log(`in ${year}, February just have 29 days `)
                }else{
                    console.log(`in ${year}, February just have 28 days`)
                }
            }
        return nameMonth
        case 3:
            nameMonth = 'March';
            maxDate = 31;
            if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                if(day>maxDate){
                    console.log(`${nameMonth} just have 31 days`)
                }else{
                    console.log(`${day}, ${nameMonth}, ${year}`)
                }
                return nameMonth
            }
        case 4:
            nameMonth = 'April';
            maxDate = 30;
            if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                if(day>maxDate){
                    console.log(`${nameMonth} just have ${maxDate} days`)
                }else{
                    console.log(`${day}, ${nameMonth}, ${year}`)
                }
                return nameMonth
            }
        case 5:
            nameMonth = 'May';
            maxDate = 31;
                if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                    if(day>maxDate){
                        console.log(`${nameMonth} just have ${maxDate} days`)
                    }else{
                        console.log(`${day}, ${nameMonth}, ${year}`)
                    }
                    return nameMonth
                }
        case 6:
            nameMonth = 'June';
            maxDate = 30;
               if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                   if(day>maxDate){
                     console.log(`${nameMonth} just have ${maxDate} days`)
                   }else{
                     console.log(`${day}, ${nameMonth}, ${year}`)
                   }
                return nameMonth
              }
        case 7:
            nameMonth = 'July';
            maxDate = 31;
                if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                    if(day>maxDate){
                        console.log(`${nameMonth} just have ${maxDate} days`)
                    }else{
                        console.log(`${day}, ${nameMonth}, ${year}`)
                    }
                    return nameMonth
                }
        case 8:
            nameMonth = 'August';
            maxDate = 31;
                if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                    if(day>maxDate){
                        console.log(`${nameMonth} just have ${maxDate} days`)
                    }else{
                        console.log(`${day}, ${nameMonth}, ${year}`)
                    }
                    return nameMonth
                }
        case 9: 
            nameMonth = 'September';
            maxDate = 30;
                if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                    if(day>maxDate){
                        console.log(`${nameMonth} just have ${maxDate} days`)
                    }else{
                        console.log(`${day}, ${nameMonth}, ${year}`)
                    }
                    return nameMonth
                }
        case 10:
            nameMonth = 'October';
            maxDate = 31;
                if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                    if(day>maxDate){
                        console.log(`${nameMonth} just have ${maxDate} days`)
                    }else{
                        console.log(`${day}, ${nameMonth}, ${year}`)
                    }
                    return nameMonth
                }
        case 11:
            nameMonth = 'November';
            maxDate = 30;
                if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                    if(day>maxDate){
                        console.log(`${nameMonth} just have ${maxDate} days`)
                    }else{
                        console.log(`${day}, ${nameMonth}, ${year}`)
                    }
                    return nameMonth
                }
        case 12:
            nameMonth = 'December';
            maxDate = 31;
                if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
                    if(day>maxDate){
                        console.log(`${nameMonth} just have ${maxDate} days`)
                    }else{
                        console.log(`${day}, ${nameMonth}, ${year}`)
                    }
                    return nameMonth
                }
        default:
            nameMonth='undefined'
        console.log('just 12 month in a year')

    }
   
}
DateIdentification(29, 2, 2021) // leap year doesn't occur in 2021
DateIdentification(30, 2, 2021) // in 2021, February just have 28 days
DateIdentification(30, 2, 2020) // in 2020, February just have 29 days 
DateIdentification(31, 4, 2020) // April just have 30 days
DateIdentification(21, 7, 2020) // 21 juli 2020

function footer() {
    console.log("---------------------------------------------------");
}
footer()
