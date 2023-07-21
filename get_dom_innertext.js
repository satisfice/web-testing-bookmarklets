javascript: 
(
	()=>
	{
		function downloadName()
		{
  			var hostname = window.location.hostname.substring(0, window.location.hostname.lastIndexOf('.')).replaceAll(".", "_");
  			var pathname = window.location.pathname ? window.location.pathname.replaceAll('/', '_'): "_";
	    		var filename = hostname + pathname + "_DOM_InnerText.json";
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
		for (let i in dom)
		{
			try{dict[dom[i].tagName].push(dom[i].innerText)}
			catch(err){dict[dom[i].tagName]=[dom[i].innerText]}
		}
		for (i in dict)
		{
			dict[i] = dict[i].sort();
		}
		download(JSON.stringify(dict, Object.keys(dict).sort(),2),downloadName(),"application/json");
	}
)();
