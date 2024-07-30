const button = document.querySelector(".menu");
// const titleChange = document.querySelector(".title");
var titleTag = document.querySelector("title");
// var sec = document.querySelector(".sec");


button.addEventListener("click", function(e){
    document.getElementById("nav").classList.toggle("active");
    button.classList.toggle("active");
});


// titleChange.addEventListener("click", function(e){  
//     var date = new Date();
//     titleTag.innerText = date.getSeconds();
// });

setInterval(function(){
    var date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();
    let session = "AM";
    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }
    hours = (hours < 10) ? "0" + hours : hours;
    min = (min < 10) ? "0" + min : min;
    secs = (secs < 10) ? "0" + secs : secs;
    let time = hours + ":" + min + ":" + secs + " " + session;
    titleTag.innerText = time;
}, 1000);

// sec.addEventListener("click", function(){
//     var date1 = new Date();
//     document.querySelector(".head").textContent = date1.getSeconds();
// });