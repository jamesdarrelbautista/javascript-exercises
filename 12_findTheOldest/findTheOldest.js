const findTheOldest = function(people) {
    people.reduce((previous, current) => {
        previousAge = previous.yearOfDeath - previous.yearOfBirth;
        currentAge = current.yearOfDeath - current.yearOfBirth;
        return previousAge > currentAge ? previous : current;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
