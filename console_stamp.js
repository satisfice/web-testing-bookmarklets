javascript: 
(
	()=>
	{
		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		the_message = prompt("What news?");
		console.log("*** Test Stamp ***" + "\nTIME: " + the_time + "\nMessage: " + the_message + "\nTITLE: " + the_title + "\nURL: " + the_place + "\n" );	
		if (the_text == "")
		{
			console.log("SELECTED TEXT: " + the_text + "\n"); 
		}
	}
)();
