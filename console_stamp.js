javascript: 
(
	()=>
	{
		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		the_message = prompt("What news?");
		json_version = {"time": the_time, "test notes":{"message": the_message, "title": the_title, "place": the_place, "text": the_text}};
		data = window.localStorage.getItem("SatisficeCoverageReporter_events");
		if (data !== null)
		{
			data_object = JSON.parse(data);
			data_object.unshift(json_version);	
			window.localStorage.setItem("SatisficeCoverageReporter_events",JSON.stringify(data_object));	
		}
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
