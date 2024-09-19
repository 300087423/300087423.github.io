const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const welcome = document.querySelector("#welcome");
const p = document.querySelector("p");
if(isMorning == true){
    p.TextContent = "good morning"
}
else if(isAfternoon == true){
    p.textContent = "good afternoon"
}
else if(isEvening == true){
    p.textContent = "good evening"
}
else{
    p.textContent = "something went wrong"
}
//im going to be honest, I dont know how I got this to work.