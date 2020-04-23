import addTabs from './tabs';
import addHome from './home';
import addContact from './contact';
import addMenuItems from './menu';

let tabLabels = ['Home', 'Menu', 'Contact'];
let menuItems = [
    {name: 'item1', description: 'item1 description'},
    {name: 'item2', description: 'item2 description'},
    {name: 'item2', description: 'item2 description'},
    {name: 'item1', description: 'item1 description'},
    {name: 'item2', description: 'item2 description'},
    {name: 'item2', description: 'item2 description'}
]
addTabs(tabLabels);
addHome();
// addContact();
// addMenuItems(menuItems);