const createMenuItem = (item) => {
    let menuItem = document.createElement('div');
    menuItem.classList.toggle('menu-item');
    
    let h1 = document.createElement('h1');
    h1.classList.toggle('menu-heading');
    h1.textContent = item.name;
    menuItem.appendChild(h1);

    let p = document.createElement('p');
    p.classList.toggle('menu-description');
    p.textContent = item.description;
    menuItem.appendChild(p);

    return menuItem;
};

const addMenuItems = (items) => {
    const content = document.querySelector('#content');
    const menu  = document.createElement('div');
    menu.classList.toggle('tab-content');
    for(let i = 0; i < items.length; i++) {
        menu.appendChild(createMenuItem(items[i]));
    }
    content.append(menu);
};

export default addMenuItems;