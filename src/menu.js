function menuFunc() {
    let content = document.querySelector('#content');
    let containerDiv = document.createElement('div')
    containerDiv.setAttribute('id', 'menu');
    containerDiv.classList.toggle('module');
    content.appendChild(containerDiv);
    let title = document.createElement('h1');
    title.textContent = 'Menu';
    title.setAttribute('id', 'title');
    title.classList.toggle('module');
    content.insertBefore(title, containerDiv);

    function createItem(title, id, img) {
        let temp = document.createElement('div');
        temp.setAttribute('id', id);
        temp.classList.toggle('menuItem')

        let dish = document.createElement('h2');
        dish.textContent = title;
        temp.appendChild(dish);

        let dishImg = document.createElement('img');
        dishImg.setAttribute('src', img)
        dishImg.classList.toggle("menuImg")
        temp.appendChild(dishImg)

        let button = document.createElement('button')
        button.textContent = "Order Now";
        button.classList.toggle('button')
        temp.appendChild(button)

        containerDiv.appendChild(temp);
    }

    createItem('California Roll', "sushi", "./images/sushi.jpg")
    createItem('Burger', 'burger', "./images/burger.jpg")
    createItem('Hot Dog', 'hot-dog', "./images/dog.jpg");
    createItem('Shrimp Allemagne', 'shrimp', "./images/shrimp.jpg")
}

export {menuFunc};