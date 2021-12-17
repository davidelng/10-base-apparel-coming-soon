const btn = document.querySelector('#btn');
const form = document.querySelector('#email__form');
const error = document.querySelector('#error');
const popup = document.querySelector('#popup');
const emailInput = document.querySelector('#email');

const isInvalid = () => {
    form.classList.add('invalid');
    error.classList.add('error');
    popup.classList.add('invalid__popup');
    emailInput.value = "";
}

const isValid = () => {
    form.classList.remove('invalid');
    error.classList.remove('error');
    popup.classList.remove('invalid__popup')
}

const validEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(String(email).toLowerCase());
};

btn.addEventListener("click", () => {
    const emailValue = emailInput.value.trim();
    if (!validEmail(emailValue)) {
        isInvalid();
    } else {
        isValid();
    }
});