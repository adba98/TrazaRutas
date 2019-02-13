var pag;
var cont;

function validarCon(){
	for (i = 0; i < 6; i++) { 
		if (document.fcon.con[i].checked == true) {
		document.getElementById('text').innerHTML = document.fcon.con[i].value;
		cont = document.fcon.con[i].value;
		}
	}
}
	
function validarPag(){
	for (i = 0; i < 5; i++) { 
		if (document.fcon.pgw[i].checked == true) {
		document.getElementById('text').innerHTML += document.fcon.pgw[i].value;
		pag = document.fcon.pgw[i].value;
		}
	}
}
