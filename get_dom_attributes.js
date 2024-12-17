javascript: 
(
	()=>
	{
		function downloadName()
		{
  			var hostname = window.location.hostname.substring(0, window.location.hostname.lastIndexOf('.')).replaceAll(".", "_");
  			var pathname = window.location.pathname ? window.location.pathname.replaceAll('/', '_'): "_";
	    		var filename = hostname + pathname + "_DOM_Attributes.json";
			return filename;
		}
		function download(text, name, type) 
		{  
			var a = document.createElement("a"); 
			var file = new Blob([text], {type: type});  
			a.href = URL.createObjectURL(file);  
			a.download = name;  
			a.click()
		}
		dom = document.querySelectorAll("*");
		const dict = {};

		for (i=0;i<dom.length;i++) 
		{
			names = dom[i].getAttributeNames();
			for (name in names)
			{
				value = dom[i].getAttribute(names[name]);
				if (names[name] in dict)
				{
					if (value in dict[names[name]])
					{
						dict[names[name]][value].push(dom[i].outerHTML);
					}
					else
					{
						dict[names[name]][value]= [dom[i].outerHTML];
					}
				}
				else
				{
					dict[names[name]] = {[value]: [dom[i].outerHTML]};
				}
			}
		}

		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		console.log("*** Test Stamp ***\n(Downloaded Attributes)\n" + "TIME: " + the_time + "\n" + "TITLE: " + the_title + "\n" + "URL: " + the_place + "\n" + "SELECTED TEXT: " + the_text + "\n" );		

		download(JSON.stringify(dict, undefined,2),downloadName(),"application/json");
	}
)();
