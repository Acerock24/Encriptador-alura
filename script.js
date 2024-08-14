// Función de encriptar
function encriptar() {
    let texto = document.getElementById('textoEntrada').value; // Toma el valor del textarea
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat"); // Reemplaza las letras según las reglas
    mostrarResultado(textoEncriptado); // Muestra el resultado
}

// Función de desencriptar
function desencriptar() {
    let texto = document.getElementById('textoEntrada').value; // Toma el valor del textarea
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u"); // Reemplaza las combinaciones por letras
    mostrarResultado(textoDesencriptado); // Muestra el resultado
}

// Función para mostrar el resultado y ocultar elementos innecesarios
function mostrarResultado(resultado) {
    document.querySelector('.image').style.display = 'none'; // Oculta la imagen
    document.getElementById('mensaje1').style.display = 'none'; // Oculta el mensaje por defecto
    document.getElementById('mensaje').textContent = resultado; // Muestra el resultado en el mismo lugar
    document.getElementById('textoEntrada').value = resultado; // También muestra el resultado en el textarea*/
    document.querySelector('.image').style.display = 'none'; // Oculta el contenedor de imagen
    document.getElementById('botonCopiar').style.display = 'block'; // Muestra el botón de copiar
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let texto = document.getElementById('mensaje').textContent; // Toma el texto encriptado/desencriptado
    navigator.clipboard.writeText(texto) // Copia el texto al portapapeles
        .then(() => {
            alert('Texto copiado al portapapeles'); // Alerta de éxito
        })
        .catch(err => {
            alert('Error al copiar el texto'); // Alerta de error
        });
}
