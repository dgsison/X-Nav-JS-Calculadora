function value1(){
	document.getElementById("boxresult").innerHTML = "1";
}

function value2(){
	document.getElementById("boxresult").innerHTML = "0";
}

function valueplus(){
	aux = document.getElementById("boxresult").innerHTML;
	document.getElementById("boxresult").innerHTML = "+";
}

function valueequal(){
	aux2 = document.getElementById("boxresult").innerHTML;
	document.getElementById("boxresult").innerHTML = (parseInt(aux)+parseInt(aux2))%2;
}