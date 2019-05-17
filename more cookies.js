//------------------------------ T I M E   S P E N T   O N   P A G E   C O O K I E --------------------------------------//

$(document).ready(function(){
	
	var getStart = getCookie("start");
	

		
		
		var getEnd = getCookie("end");
		
	
			
			
			setCookie("timeSpent", (getEnd - getStart), 3)
			var totalTimeSpentMilli = getCookie("timeSpent");
			
			var totalTimeSpentSeconds = totalTimeSpentMilli/1000;
			var totalMinutesSpent = Math.floor(totalTimeSpentSeconds/60);
			var totalSecondsSpent = totalTimeSpentSeconds - totalMinutesSpent*60;
			var totalTime = "Minutes: "+totalMinutesSpent + " Seconds: "+totalSecondsSpent;
			
			
			setCookie("totalTime", totalTime, 3);


		var start = new Date();
		var startNum = Date.parse(start);
	
		setCookie("start", startNum, 3);
	
$(window).on("unload", function(){
	var end = new Date()
	var endNum = Date.parse(end)
	
	setCookie("end", endNum, 3);
});


});	