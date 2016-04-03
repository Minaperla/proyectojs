/*function tiraDados(){
	var dado = Math.floor(Math.random()  * 6)  + 1;
	return dado;
}

alert("Tiramos 3 dados: ");
alert("El dado dice: " + tiraDados());
var multiplo = 2 + tiradados();
alert("El multiplo de bonus es :" + multiplo);*/ 

/*function numeroAlAzarHastaLimite(limite){
	var num = Math.floor(Math.random() * limite) +  1;
	return num;  }
var numAzar = numeroAlAzarHastaLimite(100);
alert("El numero es:" + numAzar);*/


/*tiraDados();
tiraDatos();
tiraDatos();*/

/*function max(num1,num2)
{
	if(num1>num2);
	{
		var numay + num2;
	}
	return numemay; 


	}*/

	/*function saludo()
	{
		mensaje = "Hola a Todos";
		alert(mensaje);
	}
	var mensaje = "Chao";
	saludo();
	alert(mensaje);
	saludo();*/


	/*var num= prompt("Ingrese un numero");

	if(isNaN(num))
	{      
		throw new Error("No es un numero valido");
    }
	else
	{  
		num = num * 0.5;
	}
	alert(num);*/

	/*function numeroAlAzarEntreLimites(limiteInferior, limiteSuperior)
	{
		if (isNaN(limiteInferior) || isNaN(limiteSuperior)) 
		{
			throw new Error("Valor igresado no coresponde a un numero");;
		}
		var num = Math.round(Math.random() *(LimiteSuperior - limiteInferior)) + limiteInferior;
		return num;
	}
	 var limitesuperior = prompt("ingrese un limite ");
	 var limiteinferior = prompt("ingrese un limite ");

	alert("Su numero al azar es:" + numeroAlAzarEntreLimites)(parseInt(limiteInferior),parseInt(limiteSuperior));
	*/

/*function numazarlimites(lim1, lim2) 
{
var num = Math.round(Math.random() * (lim1-lim2)) + lim2;
return num;
}
var limiteSuperior = prompt("Ingrese un limite superior");
var limiteInferior = prompt("Ingrese un limite inferior");

if(isNaN(limiteInferior) || isNaN(limiteSuperior))
{
throw new Error("valor ingresado no es un numero");;
}
var contador = 0;
while(contador<10)
{
var randomico=numazarlimites(parseInt(limiteInferior),parseInt(limiteSuperior));
document.write(randomico + "  ");
contador++;
}*/


/*function numeroAlAzar()
{
	var num=Math.floor(Math.random() * 100) +  1;
	return num; 
}

var contador = 0;
var numero = numeroAlAzar();

while  (true)
{

contador = contador +1;
num2 = numeroAlAzar ();
if (numero === num2)
{
	alert("El numero pensado: " + numero);
	alert("El numero adivinado: " + num2);
	break;
}
}
alert("EL CONTEO ES:" + contador +  " VECES ");*/


console.log("Inicio de programa");
var html="";

for (var i= 1; i<= 10;i++) {
	html +="<div>" + i + "</div>";}
	document.write(html);
	console.log("Programa completado");