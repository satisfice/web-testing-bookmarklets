javascript: 
(
	()=>
	{
		function downloadName()
		{
  			var hostname = window.location.hostname.substring(0, window.location.hostname.lastIndexOf('.')).replaceAll(".", "_");
  			var pathname = window.location.pathname ? window.location.pathname.replaceAll('/', '_'): "_";
	    		var filename = hostname + pathname + "_Storage.json";
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
		function send(l,s,c)
		{
			download(JSON.stringify({"javascriptCookies":c,"localStorage":l,"sessionStorage":s},null,2),downloadName(),"application/json");
		}
		const result_l = {};
		const result_s = {};
		const result_c = {};
		for (var i = 0; i < localStorage.length; i++)
		{
            try {
    			result_l[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
            }
            catch {
    			result_l[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
            }
        }		
		for (var i = 0; i < sessionStorage.length; i++)
		{
            try {
    			result_l[sessionStorage.key(i)] = JSON.parse(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
            }
            catch {
    			result_l[sessionStorage.key(i)] = sessionStorage.getItem(sessionStorage.key(i));
            }
		}
		console.log(result_l);
		window.cookieStore.getAll().then(
			function (value)
			{
				for (v in value)
				{
					result_c[value[v].name]=value[v].value;
				}
				send(result_l,result_s,result_c);
			}
		);
	}
)();
