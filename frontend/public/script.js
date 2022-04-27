// const firstPerson = {
//     name: "Peter",
//     sex: "male"
// };

// const secondPerson = {
//     name: "Sarah",
//     sex: "female"
// };

// function getGender(person) {
//     if (person.sex === "male") {
//         return "He's a man!"
//     } else {
//         return "She's a woman!"
//     };
// };

// console.log(getGender(firstPerson));
// console.log(getGender(secondPerson));
console.table(beers.cards);

const beerSectionComponent = (innerData, id = 0) => {
    return `
        <section id=${id}>
            ${innerData}
        </section>`
};

const beerCardComponent = (title, sub, type) => {
    return `
        <div>
            <h1>Title: ${title}</h1>
            <h3>Company: ${sub}</h3>
            <h4>Type: ${type}</h4>
        </div>
    `
};

const init = () => {
    const rootElement = document.querySelector('#root');
    const beerCards = beers.cards;

    for (const element of beerCards) {
        let beerData = "";
        let beerID = ""

        beerData += beerCardComponent(element.title, element.sub, element.text);
        beerID += `0${beerCards.indexOf(element)}`;

        console.log(beerID)

        rootElement.insertAdjacentHTML('beforeend', beerSectionComponent(beerData, beerID));
    };

    // beers.cards.forEach(element => {
    //     let beerData = "";

    //     beerData += beerCardComponent(element.title, element.sub, element.text);
    // beerID += `0${beerCards.indexOf(element)}`; 

    //     rootElement.insertAdjacentHTML('beforeend', beerSectionComponent(beerData, beerID));
    // });

};

window.addEventListener("load", init);