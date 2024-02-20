const animAbout = document.querySelector('.animAbout');
const animMenu = document.querySelector('.animMenu');
const animContacts = document.querySelector('.animContacts');

animAbout.addEventListener('click', aboutAnim);

function aboutAnim() {
    gsap.from('.animHeaderAbout', {x: -100, opacity: 0, duration: 2, delay: 1})
}

animMenu.addEventListener('click', menuAnim);

function menuAnim() {
    gsap.from('.animHeaderMenu', {x: -100, opacity: 0, duration: 2, delay: 1})
}

animContacts.addEventListener('click', contactsAnim);

function contactsAnim() {
    gsap.from('.animHeaderContacts', {x: -100, opacity: 0, duration: 2, delay: 1})
}


gsap.from('.nav-item', { y: 100, duration: 1.5, opacity: 0, delay: 2, stagger: 1 })
gsap.from('.logo', { opacity: 0, rotation: 720, delay: 1, duration: 2 })
gsap.from('.cafe-pic', {opacity: 0, duration: 2, delay: 3})