import {content} from './home.js';

function contactFunc() {

    let h1 = document.createElement('h1');
    h1.textContent = "Contact Us";
    content.appendChild(h1);
    h1.classList.toggle('module');
    
    let formDiv = document.createElement('div');
    formDiv.setAttribute('id', "formDiv");
    formDiv.classList.toggle('module')
    content.appendChild(formDiv);

    let form = document.createElement('form');
    form.setAttribute("id", "contact");
    formDiv.appendChild(form);

    let nameDiv = document.createElement('div');
    nameDiv.setAttribute('id', 'nameDiv');
    form.appendChild(nameDiv);
    

    function addInput(placeholder, type, tag, appended) {
        let temp = document.createElement(tag); 
        temp.classList.toggle(type);
        temp.placeholder = placeholder;
        if(type != 0) {
            temp.type = type;
        }
        appended.appendChild(temp);
    }

    addInput("First Name", "text", 'input', nameDiv);
    addInput("Second Name", "text", 'input', nameDiv);
    addInput("Phone Number", "text", 'input', form);
    addInput("Email", "email", 'input', form);
    addInput("Comments", 0, 'textarea', form);
    addInput("Submit", 'submit', 'input', form);

}

export {contactFunc};