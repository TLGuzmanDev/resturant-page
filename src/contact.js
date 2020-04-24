const createContact = () => {
    let contact = document.createElement('div');
    contact.classList.toggle('tab-content');
    
    let h1 = document.createElement('h1');
    h1.classList.toggle('tab-heading');
    h1.textContent = "CONTACT US";
    contact.appendChild(h1);

    let contactInfo = document.createElement('div');
    contact

    let emailHeading = document.createElement('div');
    emailHeading.textContent = 'EMAIL';
    let email = document.createElement('div');
    email.textContent = 'thisisnotan@email.com';
    contactInfo.appendChild(emailHeading);
    contactInfo.appendChild(email);

    let phoneHeading = document.createElement('div');
    phoneHeading.textContent = 'PHONE';
    let phone = document.createElement('div');
    phone.textContent = '123 456 7890';
    contactInfo.appendChild(phoneHeading);
    contactInfo.appendChild(phone);

    let addressHeading = document.createElement('div');
    addressHeading.textContent = 'ADDRESS';
    let address = document.createElement('div');
    address.textContent = `123 some st city, State 01234`;
    contactInfo.appendChild(addressHeading);
    contactInfo.appendChild(address);

    contact.appendChild(contactInfo);
    return contact;
};

const addContact = () => {
    const old = document.querySelector('.tab-content');
    if (old) {
        old.remove();
    }

    const content = document.querySelector('#content');
    content.appendChild(createContact());
};

export default addContact;