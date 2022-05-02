const headerComponent = (title) => {
    return `
    <header>${title}</header>
    `
};

const sectionComponent = (id, button, h2text) => {
    return `
    <section id="${id}">
        <h2>${h2text} 
            <span>
                'sup bro
            </span>
        </h2>
        <button>${button}</button>
    </section>
    `
};

const footerComponent = () => {
    return `
        <footer></footer>
    `
};

//figyelni a beforeend/beforebegin/afterbegin/afterend-re...
const loadEvent = () => {
    const rootElement = document.querySelector('#root');

    rootElement.insertAdjacentHTML('beforebegin', headerComponent('Responsivity Practice'));

    let sections = "";
    for (let i = 1; i <= 4; i++) {
        sections += sectionComponent(`id-0${i}`, `button 0${i}`, `Subtitle 0${i}`);
    };

    rootElement.insertAdjacentHTML('beforeend', sections);

    rootElement.insertAdjacentHTML('afterend', footerComponent());

};

window.addEventListener("load", loadEvent);