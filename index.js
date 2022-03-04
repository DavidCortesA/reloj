function startTime(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    meridian = (hour < 12) ? "<span>A.M.</span>" : "<span>P.M.</span>";
    hour = (hour == 0) ? 12 : hour;
    hour = (hour > 12) ? hour - 12 : hour;
    hour = checkTime(hour);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('clock').innerHTML = hour + ":" + minutes + ":" + seconds + "" + meridian;
    
    let months = ["Jaunary","February","March","April","May","June","July","August","September","October","November","December"];
    let day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat",];
    let curMounth = months[today.getMonth()];
    let curWeekDay = day[today.getDay()];
    let curDay = today.getDate();
    let curYear = today.getFullYear();
    let date = curWeekDay + ", "+ curDay + " " + curMounth + " " + curYear;
    document.getElementById('date').innerHTML = date;


    let time = setTimeout(function(){ startTime() }, 500);
}

function checkTime(i){
    if(i<10){
        i= "0" + i;
    }
    return i;
}
