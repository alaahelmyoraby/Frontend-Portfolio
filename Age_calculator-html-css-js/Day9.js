/////////////////////////// 
var days = document.getElementById("day")
var months = document.getElementById("months")
var years = document.getElementById("year")
var YearsOfAge = document.getElementById("YearsOfAge")
var MonthsOfAge = document.getElementById("MonthsOfAge")
var DaysOfAge = document.getElementById("DaysOfAge")
////////////////////////////////////////////////// 
var submit = document.getElementById("arrow")

function gettodaydate() {
    const today = new Date();
    todayDate = today.getDate()
    todayMonths = today.getMonth()
    todayYear = today.getFullYear();
    inputday = Number(days.value)
    inputmonths = Number(months.value)
    inputyear = Number(years.value)
}
function calculateAge() {
    gettodaydate(); // Make sure to call this function to get input values 
    DayofAge = todayDate - inputday
    MonthofAge = todayMonths - inputmonths
    YearofAge = todayYear - inputyear
///////////////////////////////////////////////////////
    if (MonthofAge < 0 || (MonthofAge === 0 && DayofAge < 0)) {
        YearofAge--;
        // Adjust the months 
        MonthofAge = 12 + MonthofAge;
    }

    // Adjust the days based on the day of the month 
    if (DayofAge < 0) {
        var lastDayOfMonth = new Date(todayYear, todayMonths, 0).getDate();
        DayofAge = lastDayOfMonth + DayofAge;
        MonthofAge--; // Adjust months accordingly 
    }

/////////////////////////////////////////////////////////

    YearsOfAge.innerText = Math.abs(YearofAge)
    MonthsOfAge.innerText = Math.abs(MonthofAge)
    DaysOfAge.innerText = Math.abs(DayofAge)
}


submit.onclick = calculateAge




