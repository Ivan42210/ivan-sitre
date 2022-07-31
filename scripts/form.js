// 

const patterns = {
    text: /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s]{5,60}$/,
    message: /^[a-z]{300,2000}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

const modalForm = document.getElementById('modal_form');
const form = document.getElementById('form_contact')






let a = 0;
let b = 0;
let c = 0;

function testName() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message-name');

    if (patterns.text.test(name)) {
        message.className = '';
        message.innerText = '';
        return a = 0;
    } else {
        message.className = 'invalid';
        message.innerText = 'Veuillez entrer un nom valide';
        return a = 1;
    }

}

function testMail() {
    const eMail = document.getElementById('email').value;
    const message = document.getElementById('message-mail');

    if (patterns.email.test(eMail)) {
        message.className = '';
        message.innerText = '';
        return b = 0;
    } else {
        message.className = 'invalid';
        message.innerText = 'Veuillez entrer une adresse mail valide';
        return b = 1;
    }
}

function testOption() {
    const option = document.querySelector('input[name="option"]:checked');
    const message = document.getElementById('message-option');

    if (option != null) {
        message.className = '';
        message.innerText = '';
        return c = 0;
    } else {
        message.className = 'invalid';
        message.innerText = 'Veuillez choisir une option';
        return c = 1;
    }
}

function validation(event) {
    event.preventDefault(event);

    const submit = document.getElementById('message-validation');


    let sum = 0;

    testName();
    testMail();
    testOption();

    sum = a + b + c;

    if (sum === 0) {
        modalForm.removeChild(form);
        modalForm.innerHTML = '<div class="message_valid"><h3>Votre demande a bien été envoyée</h3><i class="fa-solid fa-thumbs-up"></i></div>'
        return true;
    } else {
        console.log(sum)

        submit.className = 'invalid';
        submit.innerText = "Veuillez remplir les champs obligatoire.";
        return false;
    }
}