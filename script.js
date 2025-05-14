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