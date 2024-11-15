function mostrarEntre2Numeros() {
    // Obtener los números del usuario
    const numeroInicial = parseInt(prompt("Ingrese el número inicial:"));
    const numeroFinal = parseInt(prompt("Ingrese el número final:"));

    // Iterar desde el número inicial hasta el final y mostrar los que estan entre ellos
    console.log("Los números entre " + numeroInicial + " y " + numeroFinal + " son:");

    for (let i = numeroInicial; i <= numeroFinal; i++) {
      if (i  !== 0) {
        console.log("Ed = " + i);
      }
    }
  }
  
  // Llamar a la función para ejecutar el programa
  mostrarEntre2Numeros(); 