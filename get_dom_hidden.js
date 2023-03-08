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
		download(JSON.stringify(dict,null,2),"DOM_hiddens","application/json");
	}
)();


