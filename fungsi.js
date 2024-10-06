
function attachAudioToggle() {
    const audio = document.getElementById('audio');
    const toggleButton = document.getElementById('audio-toggle');

    if (audio && toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                toggleButton.textContent = 'Pause Audio';
            } else {
                audio.pause();
                toggleButton.textContent = 'Play Audio';
            }
        });

        toggleButton.textContent = audio.paused ? 'Play Audio' : 'Pause Audio';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const mainBanner = document.getElementById('main-banner');
    const newBanner = document.getElementById('new-banner');
    const newContent = document.getElementById('new-content');

    // Show the main banner and new content by default
    mainBanner.style.display = 'block';
    newBanner.style.display = 'none';
    newContent.style.display = 'block'; // Ensure new content is visible

    attachAudioToggle(); // Attach audio functionality

    const navbar = document.querySelector('.navbar');
    navbar.addEventListener('click', (event) => {
        const target = event.target;

        if (target.tagName === 'A') {
            event.preventDefault();
            const targetId = target.id;

            switch (targetId) {
                case 'home-link':
                    mainBanner.style.display = 'block';
                    newBanner.style.display = 'none';
                    newContent.style.display = 'block'; // Show new content in Home
                    break;
                case 'album-link':
                    mainBanner.style.display = 'none';
                    newBanner.style.display = 'block';
                    newContent.style.display = 'none'; // Hide new content in Album
                    break;
                default:
                    break;
            }
        }
    });
});

