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
		dom = document.getElementsByTagName("*");
		const dict = {};
		for (let i in dom)
		{
			try{dict[dom[i].tagName].push(dom[i].innerText)}
			catch(err){dict[dom[i].tagName]=[dom[i].innerText]}
		}
		download(JSON.stringify(dict,null,2),"DOM_InnerText","application/json");
	}
)();
