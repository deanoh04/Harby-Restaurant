let content = document.querySelector('#content');

let homeFunc = function() {
    let containerDiv = document.createElement('div');
    containerDiv.setAttribute('id', 'home');
    content.appendChild(containerDiv);
    containerDiv.classList.toggle('module')



    let title = document.createElement('h1');
    title.textContent = "Welcome to Harby's";
    containerDiv.appendChild(title);

    let image = document.createElement('img')
    image.setAttribute('src', './images/waffle.jpg')
    image.setAttribute('id', 'waffles')
    containerDiv.appendChild(image)

    let p1 = document.createElement('p');
    p1.textContent = `Here at Harby's, we are dedicated to providing all customers with the finest 
    and best quality food in the region, dedicating to serving amazing and good food. All our dishes are handcrafted 
    from the purest of ingredients and we place the utmost care into determining the cheapest possible price for each dish`
    p1.classList.toggle('blurb');
    containerDiv.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = `We hire the best chefs from across the globe, and care deeply about the impact our restaurant has 
    on the local community, refusing to hire chefs that do not contribute to the diverse atmosphere here at Harby's`;
    p2.classList.toggle('blurb');
    containerDiv.appendChild(p2)

}

export { homeFunc, content };

