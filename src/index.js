import {homeFunc} from './home.js';
import {menuFunc} from './menu.js';
import {contactFunc} from "./contact.js";


homeFunc();

let content = document.querySelector('#content');
let navBar = document.createElement('div');
navBar.setAttribute('id', "navbar");
content.appendChild(navBar);




class navItem {
    constructor(text, func) {
        this.text = text;
        this.func = func;
    }

    divTransform() {
        let temp = document.createElement('div');
        temp.textContent = this.text;
        temp.classList.toggle('nav-item');
        temp.addEventListener('mousedown',() => {
            let divSelector = content.querySelectorAll('.module');
            divSelector.forEach((div) => {
                content.removeChild(div)
            })
            this.func();
        });
        navBar.appendChild(temp);
    }
}

let home = new navItem("Home", homeFunc);
home.divTransform();

let menu = new navItem("Menu", menuFunc);
menu.divTransform();

let contact = new navItem("Contact", contactFunc);
contact.divTransform();
