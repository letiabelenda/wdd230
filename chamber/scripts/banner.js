function isBannerDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday = 1, Tuesday = 2, Wednesday = 3
}

function updateBannerVisibility() {
    const banner = document.getElementById('banner');
    if (isBannerDay()) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

// Close banner
function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
}

window.onload = updateBannerVisibility;