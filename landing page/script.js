const endDate = "16 December 2024 10:00 AM"
document.getElementById("end-date").innerText = endDate;
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function clock (){
    const end  = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;
    days.innerText = Math.floor(diff / 3600 / 24);
    hours.innerText= Math.floor(diff / 3600 % 24);
    minutes.innerText = Math.floor(diff / 60 % 60);
    seconds.innerText = Math.floor(diff) % 60;
}

setInterval( ()=>{
    clock();
},1000)
