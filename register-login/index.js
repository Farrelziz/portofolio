const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const closeIcon = document.querySelector('.icon-close');
const btnPopup = document.querySelector('.btnLogin-popup');

registerLink.addEventListener('click', function() {
    wrapper.classList.add('active')
});
loginLink.addEventListener('click', function() {
    wrapper.classList.remove('active')
});

closeIcon.addEventListener('click', function() {
    wrapper.style.transform = 'scale(0)';
    btnPopup.style.backgroundColor = 'transparent';
    btnPopup.style.color = 'white';
});

btnPopup.addEventListener('click', function() {
    wrapper.style.transform = 'scale(1)';
    btnPopup.style.backgroundColor = 'white';
    btnPopup.style.color = 'black';
});  