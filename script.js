const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const clearActive = () => {
    $$('.image').forEach(image => {
            image.classList.remove('active');
    })
}

$$('.image').forEach(image => {
    image.addEventListener('click', () => {
        clearActive();
        image.classList.add('active');
    })
})

