

let type = ['image/jpeg', 'image/jpg', 'image/png'];

document.querySelectorAll('.modal--feedback').forEach(modal => {
    modal.querySelector('.modal--feedback-info .close-i').addEventListener('click', () => {
        modal.style.display = "none";
        modal.querySelectorAll('input, textarea').forEach(item => {
            document.getElementById(item.id).classList.remove('error');
            document.getElementById('msg-' + item.id).style.visibility = "hidden";
            document.getElementById(item.id).classList.remove('errorTextarea');

        });
    });
    document.querySelector('.feedback-card-button button').addEventListener('click', () => {
        modal.style.display = "flex";
    });

    document.getElementById('button-feedback').addEventListener('click', () => {
        errorInput();
    });
});

function errorInput() {
    let count = 0;
    document.querySelectorAll('.modal--feedback input, .modal--feedback textarea').forEach(item => {
        let id = item.id;

        if (parseInt(id)) {
            if (item.value) {
                count++;
                document.getElementById('msg-' + id).style.visibility = "hidden";
                document.getElementById(id).classList.remove('error');
                document.getElementById(id).classList.remove('errorTextarea');
                addFeedback(item);

                if (item.type === 'file') {
                    if (type.indexOf(item.files[0]['type']) > -1) {
                        count++;
                        dataFeedback.image = item.files[0];
                    }
                }
            } else {
                document.getElementById('msg-' + id).style.visibility = "visible";
                document.getElementById(id).classList.add('error');
                document.getElementById(id).classList.add('errorTextarea');
            }
        }
    });

    if (count === 5) return ajaxFeedback();
}

let descFeedback = document.querySelector('.description-feedback');
let numberCharacters = document.querySelector('.number-characters');
numberCharacters.style.visibility = "visible";

descFeedback.addEventListener('input', (e) => {
    let character = 40;
    if (e.target.value.length <= character) {
        let totalCharacters = parseInt(character - e.target.value.length);
        numberCharacters.innerHTML = totalCharacters;
    }
});

function upload() {
    let image = document.getElementById(6).files[0];
    let span = document.getElementById('msg-6');

    span.style.visibility = "visible";

    if (type.indexOf(image.type) > -1) {
        span.style.color = "rgb(0, 110, 255)";
        span.innerHTML = image.name;


    } else {
        span.innerHTML = 'Arquivo invalido!';
    }
}
function addFeedback(input) {
    switch (input.name) {
        case "name":
            dataFeedback.name = input.value;
            break;
        case "email":
            dataFeedback.email = input.value;
            break;
        case "description":
            dataFeedback.description = input.value;
            break;

    }
}
async function ajaxFeedback() {
    let name = dataFeedback.name;
    let email = dataFeedback.email;
    let description = dataFeedback.description;
    let image = dataFeedback.image;
    let data = new FormData();
    data.append('name', dataFeedback.name);
    data.append('email', dataFeedback.email);
    data.append('description', dataFeedback.description);
    data.append('image', dataFeedback.image);

    const req = await fetch(`http://localhost:3000/feedback`, {
        method: "post",
        body: data
    });
    const json = await req.json();
    console.log(json)

    if (json.status) {
        reset();
        alertItem(json.status);
    }

}
function alertItem(msg) {

    document.querySelectorAll('.alert-feedback').forEach(item => {
        item.style.display = "flex";
        setTimeout(() => {
            item.style.display = "none";
        }, 10000);

        item.querySelector('p').innerText = msg;
    });
}

function reset() {
    document.querySelectorAll('.modal--feedback input, .modal--feedback textarea').forEach(inputs => {
        inputs.value = "";
    });
}



