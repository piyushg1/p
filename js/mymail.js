document.querySelector('#btn_contact').addEventListener('click', getData)

function getData() {
    const name = document.querySelector('#name_contact').value
    const email = document.querySelector('#email_contact').value
    const msg = document.querySelector('#msg_contact').value
    console.log(name, email, msg)
}