function tablaMultiplicar(numero) {
    // Validamos que el usuario ingrese un número
    if (isNaN(numero)) {
      console.error("Por favor, ingresa un número válido.");
      return;
    }
  
    // Iteramos del 1 al 10
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} * ${i} = ${resultado}`);
    }
  }
  
  // Pedimos al usuario que ingrese un número
  const numeroIngresado = prompt("Ingrese un número para generar la tabla de multiplicar:");
  
  // Convertimos el valor ingresado a un número
  const numero = Number(numeroIngresado);
  
  // Llamamos a la función para generar la tabla
  tablaMultiplicar(numero);