function getName(name, surname, group){
  return (name + " " + surname + " " + group);
}
function displayName(){

  var n = document.getElementById("name").value;
  var s = document.getElementById("surname").value;
  var gr = document.getElementById("group").value;
  var resultat = getName(n, s, gr);
  document.getElementById("boo").innerHTML = result;
}





function zeros(value){
    if (value < 10){
        value='0'+value;
    }
    return value;
}
//year
function year(){
  var currentD = new Date();
  var year = currentD.getFullYear();
  return "Year: "+year;
}
setInterval(function () {
  document.getElementById('year').innerHTML = year();
}, 1000);
//weekdays
function weekday(){
  var currentD = new Date();
  var weekday = currentD.getDay();
  var weekdays = {
    1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday' }
  const weekdayN = weekdays[weekday];
  return "Today is: "+weekdayN;
} setInterval(function () {
  document.getElementById('weekday').innerHTML = weekday();
}, 1000);
//days
function day(){
  var currentD = new Date();
  var day = zeros(currentD.getDate());
  return " Current Date: "+day;
} setInterval(function () {
  document.getElementById('day').innerHTML = day();
}, 1000);
//months
function month(){
  var currentD = new Date();
  var month = currentD.getMonth();
  var months = {
    0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December' }
  const monthN = months[month];
  return "Month: "+ monthN;
} setInterval(function () {
  document.getElementById('month').innerHTML = month();
}, 1000);
//timing
function time(){
  var currentD = new Date();
  var hours = zeros(currentD.getHours());
  var minutes = zeros(currentD.getMinutes());
  var seconds = zeros(currentD.getSeconds());

  return "Current Time: " + hours+":"+minutes+":"+seconds;
} setInterval(function () {
  document.getElementById('time').innerHTML = time();
}, 1000);






function howmanydays() {

  let today = new Date().toISOString().slice(0, 10)
  const day1  = '2022-02-03';
  const lastday    = '2024-06-30';
  const monthsD   = new Date(lastday) - new Date(day1)
  const daysD = monthsD / (1000 * 60 * 60 * 24);
return daysD + " days left until graduation.";
}setInterval(function () {
  document.getElementById('leftDays').innerHTML = howmanydays();
}, 1000);





function getMult(Number1, Number2){
  return (Number1 * Number2);
}
function multiplyNum(){
  var numb1 = document.getElementById("Number1").value;
  var numb2 = document.getElementById("Number2").value;
  numb1 = parseFloat(numb1);
  numb2 = parseFloat(numb2);
  var result = getMult(numb1, numb2);
  document.getElementById("multipl").innerHTML = result;
}

function getDiv(Number1, Number2){
  return (Number1 / Number2);
}
function divideNum(){
  var numb1 = document.getElementById("Number1").value;
  var numb2 = document.getElementById("Number2").value;
  numb1 = parseFloat(numb1);
  numb2 = parseFloat(numb2);
  var result = getDiv(numb1, numb2);
  document.getElementById("division").innerHTML = result;
}
