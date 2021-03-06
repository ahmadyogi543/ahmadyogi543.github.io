let historyRef = database.ref("history");

setTimeout(function() {
	historyRef.on("value",getData,errData);
}, 2000);

function createTable(data,nomor){
	const table = document.getElementById("history-table");
	let tr = document.createElement("tr");
	tr.className = "tr-data";
	let td = document.createElement("td");
	td.innerHTML = nomor;
	tr.appendChild(td);

	td = document.createElement("td");
	td.innerHTML = data.soal;
	tr.appendChild(td);

	td = document.createElement("td");
	td.innerHTML = data.tanggal;
	tr.appendChild(td);

	td = document.createElement("td");
	td.innerHTML = data.diskriminan;
	tr.appendChild(td);

	td = document.createElement("td");
	let x1 = data.akar.x1;
	let x2 = data.akar.x2;
	td.innerHTML = x1 + " dan " + x2;
	tr.appendChild(td);

	table.appendChild(tr);
}

function deleteTable(){
	const tr = document.getElementsByClassName("tr-data");
	while(tr[0] != undefined){
		tr[0].remove();
	}
}

function getData(data){
	data = data.val();
	if(data !== null){
		//menghapus table sebelum diload kembali
		deleteTable();
		let keys = Object.keys(data);

		//display it to the screen via table
		for(let i = 0; i < keys.length; i++){
			createTable(data[keys[i]],i+1);
		}

		document.getElementById("spin-container").style.display = "none";
		document.getElementById("history-table-container").style.display = "block";
	}
	else{
		document.getElementById("spin-container").style.display = "none";
		document.getElementById("history-table-container").style.display = "block";
	}
}

//fungsi apa bila pengambilan data dari database mengalami error
function errData(err){
	console.log("An error has occurred!");
	console.log(err);
}