function mostrarImparesEntreNumeros() {
    // Obtener los números del usuario
    const numeroInicial = parseInt(prompt("Ingrese el número inicial:"));
    const numeroFinal = parseInt(prompt("Ingrese el número final:"));

    // Iterar desde el número inicial hasta el final y mostrar los impares
    console.log("Los números impares entre " + numeroInicial + " y " + numeroFinal + " son:");
    for (let i = numeroInicial; i <= numeroFinal; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  // Llamar a la función para ejecutar el programa
  mostrarImparesEntreNumeros(); 
  