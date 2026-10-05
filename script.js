function calcular() {

    // Obtener datos del formulario

    let animal =
        document.getElementById("animal").value;

    let cantidad =
        Number(document.getElementById("cantidad").value);

    let fecha =
        document.getElementById("fecha").value;

    let alimento =
        document.getElementById("alimento").value;

    let consumo =
        Number(document.getElementById("consumo").value);

    let pesoInicial =
        Number(document.getElementById("pesoInicial").value);

    let pesoFinal =
        Number(document.getElementById("pesoFinal").value);


    // VALIDACIONES

    if (animal === "") {

        alert("Seleccione el tipo de animal.");

        return;
    }


    if (cantidad <= 0) {

        alert("Ingrese una cantidad válida de animales.");

        return;
    }


    if (fecha === "") {

        alert("Seleccione la fecha.");

        return;
    }


    if (alimento === "") {

        alert("Ingrese el nombre del alimento.");

        return;
    }


    if (consumo <= 0) {

        alert("Ingrese el consumo de alimento.");

        return;
    }


    if (pesoInicial < 0 || pesoFinal <= 0) {

        alert("Ingrese correctamente los pesos.");

        return;
    }


    if (pesoFinal <= pesoInicial) {

        alert(
            "El peso final debe ser mayor que el peso inicial."
        );

        return;
    }


    // ==========================
    // REALIZAR LOS CÁLCULOS
    // ==========================


    // Ganancia total de peso

    let ganancia =
        pesoFinal - pesoInicial;


    // Conversión alimenticia

    let conversion =
        consumo / ganancia;


    // Consumo por animal

    let consumoAnimal =
        consumo / cantidad;


    // Ganancia por animal

    let gananciaAnimal =
        ganancia / cantidad;


    // ==========================
    // MOSTRAR RESULTADOS
    // ==========================


    document.getElementById("ganancia").textContent =
        ganancia.toFixed(2) + " kg";


    document.getElementById("conversion").textContent =
        conversion.toFixed(2);


    document.getElementById("consumoAnimal").textContent =
        consumoAnimal.toFixed(2) + " kg";


    document.getElementById("gananciaAnimal").textContent =
        gananciaAnimal.toFixed(2) + " kg";


    // ==========================
    // EVALUAR CONVERSIÓN
    // ==========================


    let mensaje =
        document.getElementById("mensaje");


    if (conversion <= 2) {

        mensaje.textContent =
            "✓ Excelente conversión alimenticia.";

        mensaje.style.backgroundColor =
            "#d4edda";

        mensaje.style.color =
            "#155724";

    }

    else if (conversion <= 3) {

        mensaje.textContent =
            "⚠ Conversión aceptable. Se puede mejorar.";

        mensaje.style.backgroundColor =
            "#fff3cd";

        mensaje.style.color =
            "#856404";

    }

    else {

        mensaje.textContent =
            "⚠ Conversión alta. Revise el manejo de alimentación.";

        mensaje.style.backgroundColor =
            "#f8d7da";

        mensaje.style.color =
            "#721c24";
    }


    // ==========================
    // AGREGAR A LA TABLA
    // ==========================


    let tabla =
        document.getElementById("tablaDatos");


    let fila =
        tabla.insertRow();


    fila.insertCell(0).textContent =
        fecha;


    fila.insertCell(1).textContent =
        animal;


    fila.insertCell(2).textContent =
        cantidad;


    fila.insertCell(3).textContent =
        alimento;


    fila.insertCell(4).textContent =
        consumo.toFixed(2) + " kg";


    fila.insertCell(5).textContent =
        ganancia.toFixed(2) + " kg";


    fila.insertCell(6).textContent =
        conversion.toFixed(2);
}


// ==========================
// FUNCIÓN LIMPIAR
// ==========================


function limpiar() {

    document.getElementById("animal").value = "";

    document.getElementById("cantidad").value = "";

    document.getElementById("fecha").value = "";

    document.getElementById("alimento").value = "";

    document.getElementById("consumo").value = "";

    document.getElementById("pesoInicial").value = "";

    document.getElementById("pesoFinal").value = "";


    document.getElementById("ganancia").textContent =
        "0 kg";


    document.getElementById("conversion").textContent =
        "0";


    document.getElementById("consumoAnimal").textContent =
        "0 kg";


    document.getElementById("gananciaAnimal").textContent =
        "0 kg";


    document.getElementById("mensaje").textContent =
        "";
}