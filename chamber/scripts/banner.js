function bannerDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday is 1, Tuesday is 2, Wednesday is 3
}

function bannerVisibility() {
    const banner = document.getElementById('banner');
    if (bannerDay()) {
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

window.onload = bannerVisibility;