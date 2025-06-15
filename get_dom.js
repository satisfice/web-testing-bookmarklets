javascript: 
(
	()=>
	{
		function downloadName()
		{
  			var hostname = window.location.hostname.substring(0, window.location.hostname.lastIndexOf('.')).replaceAll(".", "_");
  			var pathname = window.location.pathname ? window.location.pathname.replaceAll('/', '_'): "_";
	    		var filename = hostname + pathname + "_DOM_Elements.json";
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
		dom = document.getElementsByTagName("*");
		const dict = {};
		for (i=0;i<dom.length;i++)
		{
			try{dict[dom[i].tagName].push(dom[i].outerHTML)}
			catch(err){dict[dom[i].tagName]=[dom[i].outerHTML]}
		}
		sortedkeys = Object.keys(dict).sort();
		for (i in sortedkeys)
		{
			dict[sortedkeys[i]] = dict[sortedkeys[i]].sort();
		}
		console.log(dict);
		for (i in dict)
		{
			for (j in dict[i])
			{
				console.log(i, j, dict[i][j]);
			}
		}
		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		console.log("*** Test Stamp ***\n(Downloaded DOM)\n" + "TIME: " + the_time + "\n" + "TITLE: " + the_title + "\n" + "URL: " + the_place + "\n" + "SELECTED TEXT: " + the_text + "\n" );		

		download(JSON.stringify(dict, undefined,2),downloadName(),"application/json");
	}
)();
