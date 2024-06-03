let clickCount = 0;
const maxClicks = 15;
const circle = document.getElementById('circle');
const ringingSound = document.getElementById('ringing-sound');

circle.addEventListener('click', () => {
    clickCount++;
    if (clickCount === maxClicks) {
        window.location.href = 'redirect.html';
    }
});

// Increase volume after 1 hour
setTimeout(() => {
    ringingSound.volume = 1.0; // Max volume
}, 3600000); // 1 hour in milliseconds