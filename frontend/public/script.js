console.table(beers.cards);

const beerTitleComponent = () => {
    return `
    <h1>Beers</h1>
    `
};

const beerSectionComponent = (innerData, id = `beer-0`) => {
    return `
        <section id=${id}>
            ${innerData}
        </section>`
};

const beerCardComponent = (name, comp, type) => {
    return `
        <div>
            <h1>Name: ${name}</h1>
            <h3>Company: ${comp}</h3>
            <h4>Type: ${type}</h4>
        </div>
    `
};

const init = () => {
    const rootElement = document.querySelector('#root');
    const beerCards = beers.cards;

    rootElement.insertAdjacentHTML('beforebegin', beerTitleComponent());

    for (const element of beerCards) {
        // let beerData = "";
        // let beerID = "";

        // beerData += beerCardComponent(element.title, element.sub, element.text);
        // beerID += `beer-0${beerCards.indexOf(element) + 1}`;

        rootElement.insertAdjacentHTML('beforeend', beerSectionComponent(beerCardComponent(element.title, element.sub, element.text), `beer-0${beerCards.indexOf(element) + 1}`));
    };
};

// A JS létrehoz egy window objektumot, amit a böngésző detektál
// addEventListener => az eseményfigyelő
window.addEventListener("load", init);

//Feladatok: nyomkodni a for ciklusokat ezerrel
//Extra feladat: kapunk egy ugyanilyen adatstruktúrájú js file-t, egy tök új repoba ugyanezeket meg kell csinálni -> mozifilmes 