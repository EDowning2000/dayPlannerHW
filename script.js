// function displayTime(){
//   var date = new Date();
//   var hour = date.getHours();
//   var min = date.getMinutes();
//   var sec = date.getSeconds();

//   if(hour==0){
//     hour=12
//   }
//   if (hour<10){
//     hour= "0" + hour
//   }
//   if(min<10){
//     min = "0" + min
//   }
//   if(sec<10){
//     sec = "0" + sec
//   }
var lockBtn = document.querySelector(".lock")
var eventOne= document.querySelector(".events")
var nine = document.querySelector(".nine")

// console.log(moment().hour())
// console.log(nine.getAttribute("value"));
var nineTime = parseInt(nine.getAttribute("value"))
// console.log(nineTime);

if(nineTime === moment().hour()){
  console.log("9am")
  $(".nine").css("background-color", "grey")
}
else if(nineTime > moment().hour()){

}
else if (nineTime<moment().hour()){
  
}



  // document.getElementById("displayedTime").innerText= updatedTime;

  var timer = setInterval(changeTime, 1000);

  function changeTime(){
    document.getElementById("displayedTime").innerText= moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  lockBtn.addEventListener('click', function(){
    console.log(eventOne.value)
    var events = eventOne.value
    localStorage.setItem("currentHourEvent", events)
    
  })
