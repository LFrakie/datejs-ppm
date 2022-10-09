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

const gdates = getDateFormat()
console.log(gdates)

document.getElementById("setdate").innerHTML = gdates;

