

const mobileMenuButton = document.getElementById('mobile-menu-button');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
        openMenu.classList.toggle('hidden');
        closeMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('hidden');
});

const aboutUs = document.getElementById('about-us');
const subAboutUs = document.getElementById('sub-about-us');

aboutUs.addEventListener('click', () => {
        subAboutUs.classList.toggle('hidden');
});

const academic = document.getElementById('academic-menu');
const subAcademic = document.getElementById('sub-academic');

academic.addEventListener('click', () => {
        subAcademic.classList.toggle('hidden');
});

const community = document.getElementById('community-menu');
const subCommunity = document.getElementById('sub-community');

community.addEventListener('click', () => {
        subCommunity.classList.toggle('hidden');
});

const news = document.getElementById('news-menu');
const subNews = document.getElementById('sub-news');

news.addEventListener('click', () => {
        subNews.classList.toggle('hidden');
});


