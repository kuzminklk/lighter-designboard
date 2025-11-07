const mediaQuery = window.matchMedia('(max-width: 450px)');

function replaceContentViaMedia(media) {
    const targetElement = document.getElementById('promo');
    if (targetElement) {
        if (mediaQuery.matches) {
            targetElement.textContent = 'Lighter design-\nboard'
        }
        else {
            targetElement.textContent = 'Lighter designboard'
        }
    }
}

replaceContentViaMedia(mediaQuery)

mediaQuery.addEventListener('change', replaceContentViaMedia);