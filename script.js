document.addEventListener('DOMContentLoaded', function() {
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Match Telegram theme
    const theme = tg.themeParams;
    document.body.style.backgroundColor = theme.bg_color || '#f0f0f0';
    document.body.style.color = theme.text_color || '#000';

    // Age verification
    const verifyButton = document.getElementById('verify-button');
    verifyButton.addEventListener('click', function() {
        tg.openTelegramLink('https://t.me/age_verification_bot');
        // Show content after verification (simplified; real apps check bot response)
        document.getElementById('age-gate').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    });

    // Optional: Fetch videos from javmyanmar.com API (if available)
    // Replace with your API URL if you have one
    /*
    fetch('https://javmyanmar.com/api/videos') // Example API endpoint
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('dynamic-content');
            data.videos.forEach(video => {
                const item = document.createElement('div');
                item.className = 'video-item';
                item.innerHTML = `<a href="${video.url}" target="_blank">${video.title}</a>`;
                content.appendChild(item);
            });
        })
        .catch(error => console.error('Error fetching videos:', error));
    */
});
