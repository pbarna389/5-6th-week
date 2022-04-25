const firstPerson = {
    name: "Peter",
    sex: "male"
};

const secondPerson = {
    name: "Sarah",
    sex: "female"
};

function getGender(person) {
    if (person.sex === "male") {
        return "He's a man!"
    } else {
        return "She's a woman!"
    };
};

console.log(getGender(firstPerson));
console.log(getGender(secondPerson));  