javascript: 
(
	()=>
	{
		function downloadName()
		{
  			var hostname = window.location.hostname.substring(0, window.location.hostname.lastIndexOf('.')).replaceAll(".", "_");
  			var pathname = window.location.pathname ? window.location.pathname.replaceAll('/', '_'): "_";
	    		var filename = hostname + pathname + "_DOM_JustInnerText.txt";
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
		textblob = "";
		dom = document.getElementsByTagName("*");
		const dict = {};
		for (i=0;i<dom.length;i++)
		{
			try{dict[dom[i].tagName].push(dom[i].innerText)}
			catch(err){dict[dom[i].tagName]=[dom[i].innerText]}
		}
		for (i in dict)
		{
			dict[i] = dict[i].sort();
			for (j in dict[i])
			{
				textblob += dict[i][j];
				textblob += "\n-------------------- bookmarklet output separator -----------------------\n";
			}
		}
		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		console.log("*** Test Stamp ***\n(Downloaded DOM showing inner text)\n" + "TIME: " + the_time + "\n" + "TITLE: " + the_title + "\n" + "URL: " + the_place + "\n" + "SELECTED TEXT: " + the_text + "\n" );		

		download(textblob,downloadName(),"application/txt");
	}
)();
