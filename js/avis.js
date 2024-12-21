document.addEventListener('DOMContentLoaded', function() {
    const ratingStars = document.querySelectorAll('.rating i');
    const ratingInput = document.getElementById('avisNote');
    const submitButton = document.getElementById('submitAvis');
    const avisForm = document.getElementById('avisForm');

    // Fonction pour mettre à jour les étoiles
    function updateStars(value) {
        ratingStars.forEach(star => {
            const starValue = star.getAttribute('data-value');
            star.classList.toggle('active', starValue <= value);
        });
    }

    // Gestion des étoiles
    ratingStars.forEach(star => {
        star.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            ratingInput.value = value;
            updateStars(value);
        });
    });

    // Gestion du formulaire
    submitButton.addEventListener('click', function() {
        if (!avisForm.checkValidity()) {
            avisForm.reportValidity();
            return;
        }

        // Vérification de la note
        if (ratingInput.value === '0' || !ratingInput.value) {
            alert('Veuillez sélectionner une note');
            return;
        }

        // Récupération des données
        const formData = {
            nom: document.getElementById('avisNom').value,
            note: ratingInput.value,
            message: document.getElementById('avisMessage').value,
            type: document.getElementById('avisType').value,
            date: new Date().toISOString()
        };

        // Message de confirmation
        Swal.fire({
            title: 'Merci !',
            text: 'Votre avis a été reçu et sera publié après vérification par notre équipe.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Fermeture de la modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('avisModal'));
                modal.hide();
                
                // Réinitialisation
                avisForm.reset();
                ratingInput.value = '0';
                updateStars(0);
            }
        });

        console.log('Avis soumis:', formData);
    });
});
