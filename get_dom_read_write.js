javascript: 
(
	()=>
	{
		function downloadName()
		{
  			var hostname = window.location.hostname.substring(0, window.location.hostname.lastIndexOf('.')).replaceAll(".", "_");
  			var pathname = window.location.pathname ? window.location.pathname.replaceAll('/', '_'): "_";
	    		var filename = hostname + pathname + "_DOM_read_writes.json";
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
		dom = document.querySelectorAll('*:read-write'); 
		const dict = {};
		for (i=0;i<dom.length;i++)
		{
			tag = dom[i].tagName;
			if (tag != undefined && tag != "undefined")
			{
				try{dict[tag].push(dom[i].outerHTML)}
				catch(err){dict[tag]=[dom[i].outerHTML]}
			}
		}
		for (i in dict)
		{
			dict[i] = dict[i].sort();
		}
		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		console.log("*** Test Stamp ***\n(Downloaded DOM showing read/writable things)\n" + "TIME: " + the_time + "\n" + "TITLE: " + the_title + "\n" + "URL: " + the_place + "\n" + "SELECTED TEXT: " + the_text + "\n" );		

		download(JSON.stringify(dict, Object.keys(dict).sort(),2),downloadName(),"application/json");
	}
)();


