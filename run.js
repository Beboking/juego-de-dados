function lanzarDados() {
    // Generar dos números aleatorios entre 1 y 6
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    // Mostrar los resultados con imágenes
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <img src="img/dado${dado1}.png" class="dice-image">
        <img src="img/dado${dado2}.png" class="dice-image">
    `;

    // Indicar si se obtuvieron dobles
    if (dado1 === dado2) {
        resultadoDiv.innerHTML += "<p>¡Dobles!</p>";
    } else {
        resultadoDiv.innerHTML += `<p>Resultado: ${dado1} y ${dado2}</p>`;
    }
}
