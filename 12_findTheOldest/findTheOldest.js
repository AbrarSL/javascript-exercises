const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    if (oldest === null) {
      oldest = person;
    } else {
      const oldestAge = (((oldest.yearOfDeath === undefined) ?
      new Date().getFullYear() :
      oldest.yearOfDeath) - oldest.yearOfBirth);

      const personAge = (((person.yearOfDeath === undefined) ?
      new Date().getFullYear() :
      person.yearOfDeath) - person.yearOfBirth);

      if (personAge > oldestAge) oldest = person;
    }

    return oldest;
  }, null);
};

// Do not edit below this line
module.exports = findTheOldest;
