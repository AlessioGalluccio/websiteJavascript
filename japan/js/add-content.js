var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18){
    greeting = 'Good evening';
}
else {
    greeting = 'Good morning';
}

document.write('<h3>' + greeting + '</h3>');