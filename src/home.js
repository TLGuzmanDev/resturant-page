const createHome = () => {
    let home = document.createElement('div');
    home.classList.toggle('tab-content');
    
    let h1 = document.createElement('h1');
    h1.classList.toggle('tab-heading');
    h1.textContent = "Welcome";
    home.appendChild(h1);

    let p = document.createElement('p');
    p.classList.toggle('tab-para');
    p.textContent = 'Do right and far exceed expectations daily. ' +
        'We do the right thing and lead by putting people first.' +
        'Each and every connection with our team, guests and ' +
        'shareholders is our opportunity to create an experience ' +
        'that FEEDs – Far Exceeds Expectations Daily – and show how much we care.';
    home.appendChild(p);

    return home;
};

const addHome = () => {
    const old = document.querySelector('.tab-content');
    if (old) {
        old.remove();
    }
    const content = document.querySelector('#content');
    content.appendChild(createHome());
};

export default addHome;