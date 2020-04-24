import {addTabs, setTabActive} from './tabs';
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
start();

function start() {
    addTabs(tabLabels);
    addHome();
    document.querySelectorAll('.tab').forEach(element => {
        element.addEventListener('click', () => {
            let label = element.textContent;
            setTabActive(label);
            if (label === 'Home') {
                addHome();
            } else if (label === 'Menu') {
                addMenuItems(menuItems);
            } else if (label === 'Contact') {
                addContact();
            }
        });
    });
}