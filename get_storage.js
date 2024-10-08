javascript: 
(
	()=>
	{
		async function getAllIndexedDBData() {
			const allDatabasesData = {};

			// Function to get all database names (IDBFactory.databases is still experimental)
			async function getAllDatabaseNames() {
				if (!indexedDB.databases) {
					console.error("indexedDB.databases is not supported in this browser.");
					return [];
				}
				const dbs = await indexedDB.databases();
				return dbs.map(db => db.name);
			}

			// Function to get all data from a specific object store
			function getAllDataFromObjectStore(db, storeName) {
				return new Promise((resolve, reject) => {
					const transaction = db.transaction(storeName, 'readonly');
					const objectStore = transaction.objectStore(storeName);
					const request = objectStore.getAll();

					request.onsuccess = (event) => {
						resolve(event.target.result);
					};

					request.onerror = (event) => {
						reject(event.target.error);
					};
				});
			}

			// Function to get all data from a database
			async function getAllDataFromDatabase(dbName) {
				return new Promise((resolve, reject) => {
					const openRequest = indexedDB.open(dbName);

					openRequest.onsuccess = async (event) => {
						const db = event.target.result;
						const databaseData = {};
						if (db.objectStoreNames.length > 0)
						{
							const transaction = db.transaction(db.objectStoreNames, 'readonly');
							const objectStoreNames = Array.from(db.objectStoreNames);

							try {
								for (const storeName of objectStoreNames) {
									databaseData[storeName] = await getAllDataFromObjectStore(db, storeName);
								}
								resolve(databaseData);
							} catch (error) {
								reject(error);
							} finally {
								db.close();
							}
						}
						else
						{
							resolve(databaseData);
						}
					};

					openRequest.onerror = (event) => {
						reject(event.target.error);
					};
				});
			}

			// Get all database names
			const dbNames = await getAllDatabaseNames();

			// Get all data from each database
			for (const dbName of dbNames) {
				try {
					allDatabasesData[dbName] = await getAllDataFromDatabase(dbName);
				} catch (error) {
					console.error(`Error retrieving data from database "${dbName}":`, error);
				}
			}

			return allDatabasesData;
		}
	
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
		function send(l,s,c,i)
		{
			download(JSON.stringify({"javascriptCookies":c,"localStorage":l,"sessionStorage":s,"indexedDB":i},null,2),downloadName(),"application/json");
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
		
		getAllIndexedDBData().then
		(
			(result_i) => 
			{
				the_title = document.title;
				the_place = window.location.href;
				the_text = window.getSelection().toString();
				the_time = Date().valueOf();
				console.log("*** Test Stamp ***\n(Downloaded stored variables)\n" + "TIME: " + the_time + "\n" + "TITLE: " + the_title + "\n" + "URL: " + the_place + "\n" );		

				window.cookieStore.getAll().then(
					function (value)
					{
						for (v in value)
						{
							result_c[value[v].name]=value[v].value;
						}
						send(result_l,result_s,result_c,result_i);
					}
				);
			}
		);
	}
)();
