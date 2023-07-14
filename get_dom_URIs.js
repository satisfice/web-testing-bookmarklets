javascript: 
(
	()=>
	{
		function downloadName()
		{
  			var hostname = window.location.hostname.substring(0, window.location.hostname.lastIndexOf('.')).replaceAll(".", "_");
  			var pathname = window.location.pathname ? window.location.pathname.replaceAll('/', '_'): "_";
	    		var filename = hostname + pathname + "_DOM_URIs";
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
		c = document.querySelectorAll('*'); 
		a = {}; 
		for (i in c) 
		{
			try {c[i].attributes["href"]} catch {continue}
			if (c[i].attributes["href"] != null) 
			{
				thelink = c[i].attributes["href"].baseURI;
				if (c[i].attributes["href"].value.includes("//"))
				{
					thelink = c[i].attributes["href"].value;
				}
				else
				{
					if (c[i].attributes["href"].value.substring(0,1) == "/")
					{
						thelink += c[i].attributes["href"].value.substring(1);
					}
					else
					{
						thelink += c[i].attributes["href"].value;
					}
				}
				if (c[i].tagName in a)
				{
					a[c[i].tagName].push([thelink,c[i].innerText]);
				}
				else
				{
					a[c[i].tagName] = [[thelink,c[i].innerText]];
				}
			}
			if (c[i].attributes["src"] != null) 
			{
				thelink = document.baseURI;
				if (c[i].attributes["src"].value.includes("//"))
				{
					thelink = c[i].attributes["src"].value;
				}
				else
				{
					if (c[i].attributes["src"].value.substring(0,1) == "/")
					{
						thelink += c[i].attributes["src"].value.substring(1);
					}
					else
					{
						thelink += c[i].attributes["src"].value;
					}
				}
				if (c[i].tagName in a)
				{
					a[c[i].tagName].push([thelink]);
				}
				else
				{
					a[c[i].tagName] = [[thelink]];
				}
			}
		}
		for (i in a)
		{
			a[i] = a[i].sort();
		}
		download(JSON.stringify(a, Object.keys(a).sort(),2),downloadName(),"application/json");
	}
)();


