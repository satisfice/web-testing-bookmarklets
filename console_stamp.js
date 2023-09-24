javascript: 
(
	()=>
	{
		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		the_message = prompt("What news?");
		json_version = {"time": the_time, "message": the_message, "title": the_title, "place": the_place, "text": the_text};
		console.log(JSON.stringify(json_version) + "\n" 
		                         + "*** Test Stamp ***" 
		                         + "\n         TIME: " + the_time 
		                         + "\n      MESSAGE: " + the_message 
								 + "\n        TITLE: " + the_title
							     + "\n          URL: " + the_place
								 + "\nSELECTED TEXT: " + the_text
			                     + "\n" );	
	}
)();
