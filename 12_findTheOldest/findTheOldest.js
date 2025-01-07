const findTheOldest = (people) => {
    let ageArr = [];

    const currentYear = new Date().getFullYear();

    people.forEach(person => {

        const yearOfDeath = person.yearOfDeath || currentYear;
        const age = yearOfDeath - person.yearOfBirth;

        ageArr.push({ name: person.name, age: age});

    });
    const maxAge = Math.max(...ageArr.map(person => person.age));

    const oldestIndex = ageArr.findIndex(person => person.age === maxAge);

    return people[oldestIndex]
}
// Do not edit below this line
module.exports = findTheOldest;
