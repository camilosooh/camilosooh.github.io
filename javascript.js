// Obtener todos los elementos input con el atributo value
var elementosInput = document.querySelectorAll('input[type="radio"]');
var messageContainer = document.querySelector('.message-container'); // Seleccionar el div de mensajes

// Agregar un evento click a cada elemento input
elementosInput.forEach(function(elemento) {
  elemento.addEventListener('click', function() {
    // Obtener el valor del atributo "value" del elemento
    var valor = elemento.value;
    // Obtener el label asociado al input
    var label = document.querySelector('label[for="' + elemento.id + '"]');
    
    // Verificar si el label tiene la clase ".wait"
    if (label && label.classList.contains('wait')) {
      // Crear el mensaje
      var mensaje = 'La bitácora ' + valor + ' no se ha subido.';
    
      // Crear un elemento de párrafo para el mensaje
      var mensajeElemento = document.createElement('p');
      mensajeElemento.textContent = mensaje;
    
      // Agregar la clase ".message" al elemento de párrafo
      mensajeElemento.classList.add('message');
    
      // Agregar el mensaje al div de mensajes
      messageContainer.appendChild(mensajeElemento);
    
      // Establecer un temporizador para eliminar el mensaje después de 5 segundos (5000 milisegundos)
      setTimeout(function() {
        messageContainer.removeChild(mensajeElemento); // Eliminar el mensaje
      }, 5000);
    }
  });
});

/*  */

// Obtén referencia al iframe y a los elementos de radio
const miIframe = document.getElementById("miIframe");
const bitacoraRadios = document.querySelectorAll(".bitacoras input[type='radio']");
const downloadsLink = document.getElementById("downloads");
const previsualizarLink = document.getElementById("previsualizar");

// Almacena los enlaces en un objeto
const enlaces = {
    1: {
        iframe: "./pdf/webs.pdf",
        download: "https://drive.usercontent.google.com/download?id=1vIf-IC2Cdyu9hxEAjPjsqX55J_8_iz60&export=download&authuser=0&confirm=t&uuid=fbd10819-e50a-4437-837b-5c48817023b7&at=APZUnTVPpFxyW3mvMCUwWZN60T30:1693938585243",
        previsualizar: "https://drive.google.com/file/d/1vIf-IC2Cdyu9hxEAjPjsqX55J_8_iz60/view?usp=sharing"
    },
    2: {
      iframe: "./pdf/wallpapers.pdf",
    download: "./pdf/wallpapers.pdf",
    previsualizar: "https://drive.google.com/file/d/1x25QpuLRoCFVZIEJA9SZ3-wXeWWzek0D/view?usp=sharing"
    },

};


bitacoraRadios.forEach(function(radio) {
    radio.addEventListener("change", function() {

        const selectedValue = this.value;

        if (this.classList.contains('wait')) {
            if (selectedValue in enlaces) {
                miIframe.src = enlaces[selectedValue].iframe;
                downloadsLink.href = enlaces[selectedValue].download;
                previsualizarLink.href = enlaces[selectedValue].previsualizar;
            } else {
                // Manejar el caso en que selectedValue no está en enlaces
            }
        } else {
            // No se ejecuta ninguna acción si el input no tiene la clase "contenido"
        }
    });
});
