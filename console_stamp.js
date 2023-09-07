javascript: 
(
	()=>
	{
		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		the_message = prompt("What news?");
		console.log("*** Test Stamp ***" + "\nTIME: " + the_time + "\nMESSAGE: " + the_message + "\nTITLE: " + the_title + "\nURL: " + the_place + "\nSELECTED TEXT: " + the_text + "\n" );	
	}
)();
