javascript: 
(
	()=>
	{
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
					thelink += c[i].attributes["href"].value.substring(1);
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
					thelink += c[i].attributes["src"].value.substring(1);
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
		download(JSON.stringify(a,null,2),"DOM_URIs","application/json");
	}
)();


