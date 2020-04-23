const createContact = () => {
    let contact = document.createElement('div');
    contact.classList.toggle('tab-content');
    
    let h1 = document.createElement('h1');
    h1.classList.toggle('tab-heading');
    h1.textContent = "Welcome to the resturant's Contact Page";
    contact.appendChild(h1);

    let p = document.createElement('p');
    p.classList.toggle('tab-para');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur' +
        ' adipisicing elit. Ut iusto tempora explicabo similique' +
        ' ratione corrupti corporis dignissimos tempore minima, nihil' +
        ' sint a soluta beatae eum quas porro eaque incidunt voluptates';
    contact.appendChild(p);

    return contact;
};

const addContact = () => {
    const content = document.querySelector('#content');
    content.appendChild(createContact());
};

export default addContact;