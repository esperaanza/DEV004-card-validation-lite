function validate(){
  const  valid= document.getElementById("cardnumber").value;
  console.log(valid);

  if(valid.length==0 || /^\s+$/.test(valid) || isNaN(valid)){
alert("debes ser un numero!!")
  }
  else{
      var arr=valid.split('');
  if(typeof(parseInt(arr[0]))=='number'){
      console.log("datos validos ");
      document.write('El numero de su tarjeta ingresada es: '+ valid);
      
      
  
  }
  function isValid(creditCardNumber){
      console.log(creditCardNumber);
  }
  var isValidCard= function(valid){
      //declaración de mis  variables
      //me sirve para separar cada digito de el numero que en este caso esta en cadena y mostrarlo en un array
       var arr=valid.split('');
      //invierte el array
       var arrInvertido=arr.reverse();
       console.log('este es el reverso: '+arrInvertido);
      //Inicializo las variables que luego utilizaré
       var prod=0;
       var sum=0;
      //Recorro mi arreglo posición a posición para realizar el algoritmo de Luhn
       for(var i=0; i<arr.length; i++){
         //Determino si una posición es par
           if(i%2===1){
             //Asigno a prod el valor del número en la posición i multiplicada por dos
               prod=arr[i]*2;
          console.log(prod)
             //Si el prod es menor que 10 entra y se asigna ese valor en reemplazo de el elemento que esta en la posicion i del arreglo
               if(prod<10){
                   arr[i]=prod;
               }else{
                    // si no se cumplió la condición anterior entonces prod>=10 por lo tanto realizo la operación de acuerdo al
                   // algoritmo de luhn, que en este caso es sumar las cifras del prod
                   resul=Math.floor(prod/10)+(prod%10);
                   // Asigno el valor de mi resul al elemento en la posicion i del array
                   arr[i]=resul;
               }
           }
           else{
             //si la posicion es impar solo lo mulplico por 1 para convertirlo a tipo de dato numerico y escribo el mismo numero
             arr[i]=arr[i]*1;
           }
       }
       //muestro mi nuevo arreglo
       console.log(arr);
      //sumo cada elemento del arreglo actual y lo almaceno en sum
       for(i=0; i<arr.length; i++){
         sum=sum+arr[i];
       }
       //muestro mi suma total
       console.log(sum);
       //Pregunta si la suma del arreglo actual es divisible entre 10
       if(sum%10===0){
          //Si es divisible muestra que es un  tarjeta válida.
           msg="Tarjeta de crédito válida";
       }else{
          //Si no es divisible entre 10 muestra tarjeta no válida
           msg="Tarjeta de crédito no válida";
       }
    //Retorna el mensaje que esta almacenado en msg
    return msg;
  }
  
   document.write('<br> '+ isValidCard(valid));
   console.log(isValidCard(valid));
}
}