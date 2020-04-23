const createTab = (label) => {
    let tab = document.createElement('div');
    tab.classList.toggle('tab');
    tab.textContent = label;
    return tab
};

const addTabs = (labels) => {
    const content = document.querySelector('#content');
    for (let i = 0; i < labels.length; i++) {
        content.appendChild(createTab(labels[i]));
    }
};

export default addTabs;