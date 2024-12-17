javascript: 
(
	()=>
	{
		function downloadName()
		{
  			var hostname = window.location.hostname.substring(0, window.location.hostname.lastIndexOf('.')).replaceAll(".", "_");
  			var pathname = window.location.pathname ? window.location.pathname.replaceAll('/', '_'): "_";
	    		var filename = hostname + pathname + "_DOM_Attributes_table.tsv";
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
		dom = document.querySelectorAll("*");
		const dict = {};

		for (i=0;i<dom.length;i++) 
		{
			names = dom[i].getAttributeNames();
			tag = dom[i].tagName;
			for (name in names)
			{
				value = dom[i].getAttribute(names[name]);
				if (tag in dict)
				{
					if (names[name] in dict[tag])
					{
						dict[tag][names[name]].push(value);
					}
					else
					{
						dict[tag][names[name]] = [value];
					}
				}
				else
				{
					dict[tag] = {[names[name]]: [value]};
				}
			}
		}
		outputstring = "";
		sortedkeys_tag = Object.keys(dict).sort();
		for (i=0;i<sortedkeys_tag.length;i++)
		{
			sortedkeys_name = Object.keys(dict[sortedkeys_tag[i]]).sort();
			for (j=0;j<sortedkeys_name.length;j++)
			{
				sortedkeys_values = [...new Set(dict[sortedkeys_tag[i]][sortedkeys_name[j]])].sort();
				for (k in sortedkeys_values)
				{
					outputstring += JSON.stringify(sortedkeys_tag[i]) + "\t";
					outputstring += JSON.stringify(sortedkeys_name[j]) + "\t";
					outputstring += JSON.stringify(sortedkeys_values[k]) + "\n";
				}
			}
		}

		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		console.log("*** Test Stamp ***\n(Downloaded Attributes Table)\n" + "TIME: " + the_time + "\n" + "TITLE: " + the_title + "\n" + "URL: " + the_place + "\n" + "SELECTED TEXT: " + the_text + "\n" );		

		download(outputstring,downloadName(),"application/txt");
	}
)();
