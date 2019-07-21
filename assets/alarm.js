
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
  dd='0'+dd
} 

if(mm<10) {
  mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;
//This up is for the date.

document.getElementById("demonew").innerHTML = today;
setInterval(function(){changeTinme()}, 1000);
//This function makes the current time to change every 1000milli seconds....
function diff (){
		d  = new Date();
	s = Number(d.getSeconds());
	m = Number(d.getMinutes());
	h = Number(d.getHours());
	p = "PM"
	a = "AM"
	ap = ""
	alarm = $("#alarm");
	in1 = Number($("#in1").val());
	in2 = Number($("#in2").val());
	in3= Number($("#in3").val());
	in4 = $("#in4").val();

		if(in1<10){
     	in1 ="0" + in1
     }
     if(in2<10){
     	in2="0" +in2
     }
     if(in3<10){
     	in3="0" +in3
     }
}

function changeTinme (){
 diff();

     if(s<10){
     	s ="0" + s
     }
     if(m<10){
     	m="0" +m
     }
     if(h<10){
     	h="0" +h
     }
     if(h<12){
     	ap=a
     }
     else if(h>12){
     	ap=p
     };

     if(h==in1 && m==in2 && s==in3){
			$("#alarm").toggleClass("blink")
			setInterval(function(){
				alarm.text("Daniel Marquis")
			}, 3000)
		}

     
		//Alarm set 

     theTime = h + "/" +" " + m +"/" +" " + s + "/"+" " + ap
	document.getElementById("demo").innerHTML = theTime;
	$("button").on("click", function(){
		
		alarm.text( in1 + "/" +" " + in2 +"/" +" " + in3 + "/"+" " + in4)
		if(in1 == "" || in2 == "" || in3 == ""){
		alarm.text("Add a Valid time")

	};

});
	
};