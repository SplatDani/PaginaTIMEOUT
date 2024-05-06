document.getElementById('inscription-form').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    
    
    if (nombre === '' || apellido === '') {
        alert('Por favor, complete todos los campos.');
        event.preventDefault(); 
    }
});
