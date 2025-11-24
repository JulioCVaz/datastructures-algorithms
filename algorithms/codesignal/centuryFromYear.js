// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
    
    // tutorial youtube calculo dos seculos - https://www.youtube.com/watch?v=D5Tjn_vhmWM
    
    var newyear = Math.ceil(year/100);
    
    return newyear;
}