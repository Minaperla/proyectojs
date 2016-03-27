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
{}
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


	var num= prompt("Ingrese un numero");

	if(isNaN(num))
	{      
		throw new Error("No es un numero valido");
    }
	else
	{  
		num = num * 0.5;
	}
	alert(num);