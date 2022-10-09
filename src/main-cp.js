function getdate() {
	let f = new Date();
	let dateToDoc = getDateFormat(f)
	document.getElementById("setdate").innerHTML = dateToDoc;
}

getdate()


function getDateFormat() {
	let f = new Date();
	var d = new Date(f),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2)
		month = '0' + month;
	if (day.length < 2)
		day = '0' + day;
	return [year, month, day].join('-');
}


