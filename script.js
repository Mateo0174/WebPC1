        $(document).ready(function(){
            // Mostrar la sección "Inicio" al cargar
            $('#home').show();
            $('#destacados').hide();

            // Al hacer clic en "Inicio"
            $('#show-home').click(function(){
                $('#home').show();
                $('#destacados').hide();
            });

            // Al hacer clic en "Lo más destacado"
            $('#show-destacados').click(function(){
                $('#home').hide();
                $('#destacados').show();
            });
        });


//PARA EL FORM
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const form = document.getElementById('avistamiento-form');
    const fileInput = document.getElementById('foto');
    const previewContainer = document.getElementById('preview-container');
    const imagePreview = document.getElementById('image-preview');
    const successMessage = document.getElementById('success-message');
    
    // Validar formato de coordenadas GPS
    function validarCoordenadas(coords) {
        const pattern = /^-?\d+(\.\d+)?,\s*-?\d+(\.\d+)?$/;
        return pattern.test(coords);
    }
    
    // Validar correo electrónico
    function validarEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    
    // Mostrar vista previa de la imagen
    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.addEventListener('load', function() {
                imagePreview.setAttribute('src', this.result);
                previewContainer.style.display = 'block';
            });
            
            reader.readAsDataURL(file);
        } else {
            previewContainer.style.display = 'none';
        }
    });
    
    // Manejo del botón de selección de archivo
    document.querySelector('.file-upload-btn').addEventListener('click', function(e) {
        e.preventDefault();
        fileInput.click();
    });
    
    // Validación del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const errorMessages = document.querySelectorAll('.error-message');
        
        // Restablecer mensajes de error
        errorMessages.forEach(msg => {
            msg.style.display = 'none';
        });
        
        // Validar nombre
        const nombre = document.getElementById('nombre').value.trim();
        if (nombre === '') {
            document.getElementById('nombre-error').style.display = 'block';
            isValid = false;
        }
        
        // Validar email
        const email = document.getElementById('email').value.trim();
        if (email === '' || !validarEmail(email)) {
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }
        
        // Validar tipo de usuario
        const tipoUsuario = document.getElementById('tipo-usuario').value;
        if (tipoUsuario === '') {
            document.getElementById('tipo-usuario-error').style.display = 'block';
            isValid = false;
        }
        
        // Validar fecha
        const fecha = document.getElementById('fecha').value;
        if (fecha === '') {
            document.getElementById('fecha-error').style.display = 'block';
            isValid = false;
        }
        
        // Validar ubicación
        const ubicacion = document.getElementById('ubicacion').value.trim();
        if (ubicacion === '' || !validarCoordenadas(ubicacion)) {
            document.getElementById('ubicacion-error').style.display = 'block';
            isValid = false;
        }
        
        // Validar tipo de organismo
        const tipoOrganismo = document.getElementById('tipo-organismo').value;
        if (tipoOrganismo === '') {
            document.getElementById('tipo-organismo-error').style.display = 'block';
            isValid = false;
        }
        
        // Validar descripción
        const descripcion = document.getElementById('descripcion').value.trim();
        if (descripcion === '') {
            document.getElementById('descripcion-error').style.display = 'block';
            isValid = false;
        }
        
        // Validar autorización
        const autorizacion = document.getElementById('autorizacion').checked;
        if (!autorizacion) {
            document.getElementById('autorizacion-error').style.display = 'block';
            isValid = false;
        }
        
        // Si el formulario es válido, simulamos el envío
        if (isValid) {
            // Aquí normalmente se enviaría el formulario a un servidor
            // Para este ejemplo, simulamos un envío exitoso
            
            // Mostrar mensaje de éxito
            successMessage.style.display = 'block';
            
            // Desplazarse al inicio de la página
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Reiniciar el formulario después de 1 segundo
            setTimeout(function() {
                form.reset();
                previewContainer.style.display = 'none';
            }, 1000);
            
            // Ocultar el mensaje de éxito después de 5 segundos
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
});
//FIN DEL FORM