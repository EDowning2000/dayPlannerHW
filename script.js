
var lock9 = document.querySelector(".lock9")
var lock10 = document.querySelector(".lock10")
var lock11 = document.querySelector(".lock11")
var lock12 = document.querySelector(".lock12")
var lock13 = document.querySelector(".lock13")
var lock14 = document.querySelector(".lock14")
var lock15 = document.querySelector(".lock15")
var lock16= document.querySelector(".lock16")
var lock17= document.querySelector(".lock17")
var event9= document.querySelector(".event9")
var event10= document.querySelector(".event10")
var event11= document.querySelector(".event11")
var event12= document.querySelector(".event12")
var event13= document.querySelector(".event13")
var event14= document.querySelector(".event14")
var event15= document.querySelector(".event15")
var event16= document.querySelector(".event16")
var event17= document.querySelector(".event17")
var nine = document.querySelector('.nine')
var ten = document.querySelector('.ten')
var eleven= document.querySelector('.eleven')
var twelve  = document.querySelector('.twelve')
var thirteen = document.querySelector('.thirteen')
var fourteen = document.querySelector('.fourteen')
var fifteen = document.querySelector('.fifteen')
var sixteen = document.querySelector('.sixteen')
var seventeen= document.querySelector('.seventeen')
//variables / lock is the button and event is the form

var nineTime = parseInt(nine.getAttribute("value"))
var tenTime = parseInt(ten.getAttribute("value"))
var elevenTime=parseInt(eleven.getAttribute("value"))
var twelveTime=parseInt(twelve.getAttribute("value"))
var thirteenTime=parseInt(thirteen.getAttribute("value"))
var fourteenTime=parseInt(fourteen.getAttribute("value"))
var fifteenTime=parseInt(fifteen.getAttribute("value"))
var sixteenTime=parseInt(sixteen.getAttribute("value"))
var seventeenTime=parseInt(seventeen.getAttribute("value"))
//hour values that will be compared

if(nineTime === moment().hour()){
  $(".nine").addClass("current")
}
else if(nineTime > moment().hour()){
  $(".nine").addClass("past")

}
else if (nineTime < moment().hour()){
  $(".nine").addClass("future")
} //checks for 9 am -----------------------

if(tenTime === moment().hour()){
  $(".ten").addClass("current")
}
else if(tenTime > moment().hour()){
  $(".ten").addClass("past")

}
else if (tenTime < moment().hour()){
  $(".ten").addClass("future")
} //checks for 10 am -------------------------

if(elevenTime === moment().hour()){
  $(".eleven").addClass("current")
}
else if(elevenTime > moment().hour()){
  $(".eleven").addClass("past")

}
else if (elevenTime < moment().hour()){
  $(".eleven").addClass("future")
} //checks for 11 am ---------------------------

if(twelveTime === moment().hour()){
  $(".twelve").addClass("current")
}
else if(twelveTime > moment().hour()){
  $(".twelve").addClass("past")

}
else if (twelveTime < moment().hour()){
  $(".twelve").addClass("future")
} //checks for 12 pm ---------------------------

if(thirteenTime === moment().hour()){
  $(".thirteen").addClass("current")
}
else if(thirteenTime > moment().hour()){
  $(".thirteen").addClass("past")

}
else if (thirteenTime < moment().hour()){
  $(".thirteen").addClass("future")
}//checks for 13 --------------------------------


if(fourteenTime === moment().hour()){
  $(".fourteen").addClass("current")
}
else if(fourteenTime > moment().hour()){
  $(".fourteen").addClass("past")

}
else if (fourteenTime < moment().hour()){
  $(".fourteen").addClass("future")
}//fourteen checks ----------------------------

if(fifteenTime === moment().hour()){
  $(".fifteen").addClass("current")
}
else if(fifteenTime > moment().hour()){
  $(".fifteen").addClass("past")

}
else if (fifteenTime < moment().hour()){
  $(".fifteen").addClass("future")
}// fifteen checks -----------------------------

if(sixteenTime === moment().hour()){
  $(".sixteen").addClass("current")
}
else if(sixteenTime > moment().hour()){
  $(".sixteen").addClass("past")

}
else if (sixteenTime < moment().hour()){
  $(".sixteen").addClass("future")
}//sixteen checks-------------------------------

if(seventeenTime === moment().hour()){
  $(".seventeen").addClass("current")
}
else if(seventeenTime > moment().hour()){
  $(".seventeen").addClass("past")

}
else if (seventeenTime < moment().hour()){
  $(".seventeen").addClass("future")
} //seventeen checks --------------------------



  var timer = setInterval(changeTime, 1000);
  //interval that updates the clock every second -----

  function changeTime(){
    document.getElementById("displayedTime").innerText= moment().format('MMMM Do YYYY, h:mm:ss a');
  } //function that displays the time-----------------

  lock9.addEventListener('click', function(){
    console.log(event9.value)
    var stored9 = event9.value
    localStorage.setItem("hour9Event", stored9)
  }) //event listener for the first lock-----------

  lock10.addEventListener('click', function(){
    console.log(event10.value)
    var stored10 = event10.value
    localStorage.setItem("hour10Event", stored10)
  })//event listener for the second----------------

  lock11.addEventListener('click', function(){
    console.log(event11.value)
    var stored11 = event11.value
    localStorage.setItem("hour11Event", stored11)
  }) //event listener for the third----------------

  lock12.addEventListener('click', function(){
    console.log(event12.value)
    var stored12 = event12.value
    localStorage.setItem("hour12Event", stored12)
  })//event listener for the 4th-------------------

  lock13.addEventListener('click', function(){
    console.log(event13.value)
    var stored13 = event13.value
    localStorage.setItem("hour13Event", stored13)
  })//event listener for the 5th ------------------

  lock14.addEventListener('click', function(){
    console.log(event14.value)
    var stored14 = event14.value
    localStorage.setItem("hour14Event", stored14)
  })//6th event listner-----------------------------

  lock15.addEventListener('click', function(){
    console.log(event15.value)
    var stored15 = event15.value
    localStorage.setItem("hour15Event", stored15)
  }) //7th event listener---------------------------

  lock16.addEventListener('click', function(){
    console.log(event16.value)
    var stored16 = event16.value
    localStorage.setItem("hour16Event", stored16)
  })//8th event listner-----------------------------

  lock17.addEventListener('click', function(){
    console.log(event17.value)
    var stored17 = event17.value
    localStorage.setItem("hour17Event", stored17)
  })//9th event listner-------------------------------
