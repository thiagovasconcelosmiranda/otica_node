
document.querySelector('#button--contact').addEventListener('click', () => {
    inputError();
});

function inputError() {
    let num = 0;
    let input = document.querySelectorAll('.contact--form input, textarea');
    input.forEach(item => {
        let id = item.id;

        if (id != 9) {
            if (item.value) {
                document.getElementById(id).classList.remove('input-error');
                document.getElementById("error-" + id).style.visibility = "hidden";
                addContact(item);
                num++;
            } else {
                document.getElementById(id).classList.add('input-error');
                document.getElementById("error-" + id).style.visibility = "visible";
            }
        }
    });

    if (num == 5) {
        ajaxContact();
        return;
    }
}


function addContact(input) {
    switch (input.name) {
        case "firstName":
            contact.firstname = input.value;
            break;
        case "lastName":
            contact.lastname = input.value;
            break;
        case "email":
            contact.email = input.value;
            break;
        case "phone":
            contact.phone = input.value;
            break;
        case "descrition":
            contact.description = input.value;
            break;
    }

}


async function ajaxContact() {
    let firstname = contact.firstname;
    let lastname = contact.lastname;
    let email = contact.email;
    let phone = contact.phone;
    let description = contact.description;

    const req = await fetch(`http://localhost:3000/contato`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname, lastname, email, phone, description })
    });

    const json = await req.json();
    if (json.status) {
        alertItem(json.status);
        reset();
        return;
    }
}

function reset() {
    let inputs = document.querySelectorAll('.contact--form input, textarea');
    inputs.forEach(item => {
        item.value = "";
    });
}

function alertItem(msg) {
    document.querySelectorAll('.alert-i').forEach(item => {
        item.style.display = "flex";
        setTimeout(() => {
            item.style.display = "none";
        }, 10000);

        item.querySelector('p').innerText = msg;
    });

}