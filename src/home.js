const createHome = () => {
    let home = document.createElement('div');
    home.classList.toggle('tab-content');
    
    let h1 = document.createElement('h1');
    h1.classList.toggle('tab-heading');
    h1.textContent = "Welcome to the resturant's homepage";
    home.appendChild(h1);

    let p = document.createElement('p');
    p.classList.toggle('tab-para');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur' +
        ' adipisicing elit. Ut iusto tempora explicabo similique' +
        ' ratione corrupti corporis dignissimos tempore minima, nihil' +
        ' sint a soluta beatae eum quas porro eaque incidunt voluptates';
    home.appendChild(p);

    return home;
};

const addHome = () => {
    const content = document.querySelector('#content');
    content.appendChild(createHome());
};

export default addHome;