const createTab = (label) => {
    let tab = document.createElement('div');
    tab.classList.toggle('tab');
    tab.textContent = label;
    return tab
};

const addTabs = (labels) => {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.id = 'header';

    for (let i = 0; i < labels.length; i++) {
        let tab = createTab(labels[i]);
        if (i === 0) {
            tab.classList.toggle('active');
        }
        header.appendChild(tab);
    }
    content.appendChild(header);
};

const setTabActive = (label) => {
    document.querySelectorAll('.tab').forEach(element => {
        if (element.textContent === label) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });

}

export {
    addTabs,
    setTabActive
}