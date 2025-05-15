// especies.js

$(document).ready(function() {
    // Manejador para abrir ficha técnica
    $('.btn-ficha').click(function() {
        const card = $(this).closest('.especie-card');
        const nombre = card.data('nombre');
        const info = card.data('info');

        $('#fichaModalLabel').text('Ficha Técnica: ' + nombre);
        $('#modal-ficha-content').html('<p>' + info + '</p>');
        $('#fichaModal').modal('show');
    });

    // Galería Lightbox (usando Bootstrap modal como lightbox básico)
    $('a[data-toggle="lightbox"]').click(function(e) {
        e.preventDefault();
        const src = $(this).attr('href');
        const lightboxModal = `
            <div class="modal fade" id="lightboxModal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-transparent border-0">
                        <button type="button" class="close text-white pr-3 pt-2" data-dismiss="modal">&times;</button>
                        <img src="${src}" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        `;

        $('body').append(lightboxModal);
        $('#lightboxModal').modal('show');

        $('#lightboxModal').on('hidden.bs.modal', function() {
            $(this).remove();
        });
    });
});
