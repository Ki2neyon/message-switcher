const message = document.getElementById('message');
const button = document.getElementById('change-button');

button.addEventListener('click', () => {
    if (message.textContent === 'HTMLとCSSを学習中です') {
        message.textContent = 'JavaScriptを学習中です'
    } else {
        message.textContent = 'HTMLとCSSを学習中です'
    };
});