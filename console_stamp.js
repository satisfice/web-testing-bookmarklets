javascript: 
(
	()=>
	{
		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		console.log("*** Test Stamp ***\n" + "TIME: " + the_time + "\n" + "TITLE: " + the_title + "\n" + "URL: " + the_place + "\n" + "SELECTED TEXT: " + the_text + "\n" );		
	}
)();
