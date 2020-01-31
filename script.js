console.log(moment())

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
var lockBtn = document.querySelector("lock")

  var updatedTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  // document.getElementById("displayedTime").innerText= updatedTime;

  var timer = setInterval(changeTime, 1000);

  function changeTime(){
    document.getElementById("displayedTime").innerText= updatedTime;
  }

  

   
