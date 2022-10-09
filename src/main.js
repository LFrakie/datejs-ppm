function getDateFormat() {

	var d = new Date() // Obtenemos la fecha
  console.log("La fecha obtenida es:")
  console.log(d)
  
	 month = '' + (d.getMonth()- 1) // Extraer MES
	 day = '' + d.getDate() // Extraer DIA
	 year = d.getFullYear() // Extraer AÑO
  
	if (month.length < 2) // si solo tenemos un digito ..
		month = '0' + month; // le añadiremos un 0 adelante ..
	if (day.length < 2) // lo mismo de arriba
		day = '0' + day;
	return [year, month, day].join('-'); // Remplazamos los espacios o comas por guiones 
}

const gdates = getDateFormat()  // Llamamos a la funcion para guardarla en uan variable llamada (gdates) ..
console.log(gdates) // imprimimos la variable (gdates)

// Insertamos en nuestro html
document.getElementById("setdate").innerHTML = gdates; 

