//Date 
let today = Date.now();
let todayDate = new Date(today);
document.getElementById('current-date').innerHTML = todayDate.toDateString();