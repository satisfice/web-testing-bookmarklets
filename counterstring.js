javascript: 
(
	()=> {

	function buildString (string_length, delimiter) {
		while (string_length > 1) {
			chunk = string_length.toString() + delimiter.toString();
			theString = chunk + theString;
			string_length -= chunk.length;
		}
		if ( string_length == 1 ) {
			theString = delimiter.toString() + theString;
		}
		return(theString);
	}
	
	let delimiter = "*";
	let theString = "";
	
	the_message = prompt("Length (,delimiter)");
	if (the_message != null) {
		if (result = the_message.match(/^(\d+)/)) {
			string_length = parseInt(result[1]);
		}

		if (result = the_message.match(/^\d+,(.)$/)) {
			delimiter = result[1].toString();
		}	

		theString = buildString(string_length, delimiter);
		navigator.clipboard.writeText(theString);
	}

	}
)();