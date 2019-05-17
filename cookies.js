
$(document).ready(function(){

	$("#tabs").tabs({
		activate: function(){
		
		var activeTab = $("#tabs").tabs("option","active");
		
		if(activeTab == 1)
		{
			chiliStart = new Date();
			chiliStartInMilli = Date.parse(chiliStart);
			setCookie("chiliStart", chiliStartInMilli, 3);
			return(chiliStartInMilli); 
			
			
			var r2EndTime = getCookie("r2End");
			if(!r2EndTime)
			{
				r2End = new Date();
				r2EndInMilli = Date.parse(r2End);
				setCookie("r2End", r2EndInMilli, 3);
			}
			
			var r3EndTime = getCookie("r3End");
			if(!r3EndTime)
			{
				r3End = new Date();
				r3EndInMilli = Date.parse(r3End);
				setCookie("r3End", r3EndInMilli, 3);
			}
			
		}
		else if(activeTab == 2)
			{
				r2Start = new Date();
				r2StartInMilli = Date.parse(r2Start);
				setCookie("r2Start", r2StartInMilli, 3);
				return(r2StartInMilli); 
				
				var chiliEndTime = getCookie("chiliEnd");
				if(!chiliEndTime)
				{
					chiliEnd = new Date();
					chiliEndInMilli = Date.parse(chiliEnd);
					setCookie("chiliEnd", chiliEndInMilli, 3);
				}
				
				var r3EndTime = getCookie("r3End");
				if(!r3EndTime)
				{
				r3End = new Date();
				r3EndInMilli = Date.parse(r3End);
				setCookie("r3End", r3EndInMilli, 3);
				}
				
			}
			else if(activeTab == 3)
				{
					r3Start = new Date();
					r3StartInMilli = Date.parse(r3Start);
					setCookie("r3Start", r3StartInMilli, 3);
					return(r3StartInMilli);
					
					var chiliEndTime = getCookie("chiliEnd");
					if(!chiliEndTime)
					{
						chiliEnd = new Date();
						chiliEndInMilli = Date.parse(chiliEnd);
						setCookie("chiliEnd", chiliEndInMilli, 3);
					}
					
					
					var r2EndTime = getCookie("r2End");
					if(!r2EndTime)
					{
					r2End = new Date();
					r2EndInMilli = Date.parse(r2End);
					setCookie("r2End", r2EndInMilli, 3);
					}
					
				}
			}
	});

	
	$("#cookiePage").click(function(){
	
		//When the button is clicked, make sure that whatever tab is opened has an end time that is after their start time
		
		var chiliEndTime = getCookie("chiliEnd");
		var r2EndTime = getCookie("r2End");
		var r3EndTime = getCookie("r3End");
		
		var chiliStartTime = getCookie("chiliStart");
		var r2StartTime = getCookie("r2Start");
		var r3StartTime = getCookie("r3Start");
		
		if(!chiliEndTime)
		{
			var chiliEnd = new Date();
			var chiliEndInMilli = Date.parse(chiliEnd);
			setCookie("chiliEnd", chiliEndInMilli, 3);
		}
		
		if(!chiliStartTime)
		{
				setCookie("chiliStart", 0, 3);
				setCookie("chiliEnd", 0, 3)
		}
		
		
		if(!r2EndTime)
		{
			var r2End = new Date();
			var r2EndInMilli = Date.parse(r2End);
			setCookie("r2End", r2EndInMilli, 3);
		}
		
		if(!r2StartTime)
		{
				setCookie("r2Start", 0, 3);
				setCookie("r2End", 0, 3);
		}
		
		if(!r3EndTime)
		{
			var r3End = new Date();
			var r3EndInMilli = Date.parse(r3End);
			setCookie("r3End", r3EndInMilli, 3);	
		}
	
		if(!r3StartTime)
		{
				setCookie("r3Start", 0, 3);
				setCookie("r3End", 0, 3);
		}
		
		
	
		window.location = "recipeCookieResults.html";
	});
});