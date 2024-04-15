javascript: 
(
	()=>
	{
		function downloadName()
		{
  			var hostname = window.location.hostname.substring(0, window.location.hostname.lastIndexOf('.')).replaceAll(".", "_");
  			var pathname = window.location.pathname ? window.location.pathname.replaceAll('/', '_'): "_";
	    		var filename = hostname + pathname + "_DOM_Classes.json";
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
		dom = document.querySelectorAll('*[class]');
		const dict = {};
		for (i=0;i<dom.length;i++)
		{
			if (!(dom[i].tagName in dict))
			{
				dict[dom[i].tagName] = {};
			}
			dict[dom[i].tagName][dom[i].className] = 0;
		}
		const out = {};
		for (i of Object.keys(dict).sort())
		{
			if (!(i in out))
			{
				out[i] = [];
			}
			for (v of Object.keys(dict[i]).sort())
			{
				out[i].push(v);
			}
		}
		for (i in out)
		{
			out[i] = out[i].sort();
		}
		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		console.log("*** Test Stamp ***\n(Downloaded DOM showing classes)\n" + "TIME: " + the_time + "\n" + "TITLE: " + the_title + "\n" + "URL: " + the_place + "\n" + "SELECTED TEXT: " + the_text + "\n" );		

		download(JSON.stringify(out, Object.keys(out).sort(),2),downloadName(),"application/json");
	}
)();
