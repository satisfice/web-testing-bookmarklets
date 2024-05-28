javascript: 
(
	async ()=>
	{
		the_type = "bug";
		the_title = document.title;
		the_place = window.location.href;
		the_text = window.getSelection().toString();
		the_time = Date().valueOf();
		the_message = prompt("What seems wrong?");
		if (the_message != null)
		{
			json_version = {"time": the_time, "test notes":{"message": the_message, "title": the_title, "place": the_place, "text": the_text, "type": the_type}};

            const dbName = 'SatisficeCoverageRecorder';
            await window.indexedDB.databases().then(
                (dbs) => {
                    out = dbs.map((db)=>{return db.name == dbName;});
                    if (out.includes(true)) 
						{
							if (window.localStorage.getItem("SatisficeCoverageReporter_active") == "started")
							{							
								let db;
								const request = window.indexedDB.open(dbName);
								request.onsuccess = (event) => {
									db = event.target.result;
									const transaction = db.transaction(["Events"], "readwrite");
									const objectStore = transaction.objectStore("Events");
									const request = objectStore.add(json_version);
							}
                        }
                    }                    
                }
            );

			console.log(JSON.stringify(json_version) + "\n" 
									 + "*** Test Stamp ***" 
									 + "\n         TIME: " + the_time 
									 + "\n      MESSAGE: " + the_message 
									 + "\n        TITLE: " + the_title
									 + "\n          URL: " + the_place
									 + "\nSELECTED TEXT: " + the_text
									 + "\n" );
		}							 
	}
)();
