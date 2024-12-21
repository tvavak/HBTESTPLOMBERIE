// Fonction pour ajuster la hauteur du préloader
function setPreloaderHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.height = `${window.innerHeight}px`;
    }
}

// Exécuter au chargement
window.addEventListener('load', setPreloaderHeight);
// Fonction pour ajuster la hauteur du préloader
function setPreloaderHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.height = `${window.innerHeight}px`;
    }
}

// Exécuter au chargement
window.addEventListener('load', setPreloaderHeight);

// Exécuter au redimensionnement
window.addEventListener('resize', setPreloaderHeight);

// Exécuter quand l'orientation change
window.addEventListener('orientationchange', setPreloaderHeight);
