
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    document.documentElement.style.setProperty('--color-white', isDarkMode ? '#111111' : '#fff');
    document.documentElement.style.setProperty('--color-black', isDarkMode ? '#fff' : '#111111');

    localStorage.setItem('colorMode', isDarkMode ? 'dark' : 'light');

    setLogoBasedOnMode(isDarkMode ? 'dark' : 'light');
}

function setLogoBasedOnMode(currentMode) {
    const headerLogoImg = document.getElementById('header-logo-img');
    const footerLogoImg = document.getElementById('footer-logo-img');

    if (currentMode === 'dark') {
        headerLogoImg.src = 'assets/img/logo-darkmode.png';
        footerLogoImg.src = 'assets/img/logo-darkmode.png';
    } else {
        headerLogoImg.src = 'assets/img/logo.svg';
        footerLogoImg.src = 'assets/img/logo.svg';
    }
}

const colorToggle = document.getElementById('color-toggle');
colorToggle.addEventListener('click', toggleDarkMode);

const storedMode = localStorage.getItem('colorMode');

if (storedMode) {
    if ((storedMode === 'dark') !== document.body.classList.contains('dark-mode')) {
        toggleDarkMode();
    }
}
