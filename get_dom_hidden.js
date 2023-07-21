javascript: 
(
	()=>
	{
		function downloadName()
		{
  			var hostname = window.location.hostname.substring(0, window.location.hostname.lastIndexOf('.')).replaceAll(".", "_");
  			var pathname = window.location.pathname ? window.location.pathname.replaceAll('/', '_'): "_";
	    		var filename = hostname + pathname + "_DOM_hiddens.json";
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
		dom = document.querySelectorAll('*[style*="hidden"], *[style*="display:none"]'); 
		const dict = {};
		for (i in dom)
		{
			tag = dom[i].tagName;
			if (tag != undefined && tag != "undefined")
			{
				try{dict[dom[i].tagName].push(dom[i].outerHTML)}
				catch(err){dict[dom[i].tagName]=[dom[i].outerHTML]}
			}
		}
		for (i in dict)
		{
			dict[i] = dict[i].sort();
		}
		download(JSON.stringify(dict, Object.keys(dict).sort(),2),downloadName(),"application/json");
	}
)();


