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
		dom = document.querySelectorAll('*:read-write'); 
		const dict = {};
		for (let i in dom)
		{
			tag = dom[i].tagName;
			if (tag != undefined && tag != "undefined")
			{
				try{dict[tag].push(dom[i].outerHTML)}
				catch(err){dict[tag]=[dom[i].outerHTML]}
			}
		}
		download(JSON.stringify(dict,null,2),"DOM_read_writes","application/json");
	}
)();


