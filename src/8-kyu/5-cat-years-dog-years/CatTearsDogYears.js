const CAT_DOG_FIRST_YEAR_MULTIPLIER = 15;

const CAT_DOG_SECOND_YEAR_MULTIPLIER = 9;
const CAT_OTHER_YEAR_MULTIPLIER = 4;

const DOG_OTHER_YEAR_MULTIPLIER = 5;

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears;
    let dogYears;
    switch (humanYears) {
        case 1 :
            catYears = CAT_DOG_FIRST_YEAR_MULTIPLIER;
            dogYears = CAT_DOG_FIRST_YEAR_MULTIPLIER;
            break;

        case 2:
            catYears = CAT_DOG_FIRST_YEAR_MULTIPLIER + CAT_DOG_SECOND_YEAR_MULTIPLIER;
            dogYears = CAT_DOG_FIRST_YEAR_MULTIPLIER + CAT_DOG_SECOND_YEAR_MULTIPLIER;
            break
        default:
            catYears = calcYearForCat(humanYears);
            dogYears = calcYearForDog(humanYears);
            break;
    }

    // Your code here!
    return [humanYears, catYears, dogYears];
}

const calcYearForCat = (humanYears) => {
    const humanYearsExceptFirstYears = humanYears - 2;
    const result = humanYearsExceptFirstYears * CAT_OTHER_YEAR_MULTIPLIER;
    return result + CAT_DOG_FIRST_YEAR_MULTIPLIER + CAT_DOG_SECOND_YEAR_MULTIPLIER;
}

const calcYearForDog = (humanYears) => {
    const humanYearsExceptFirstYears = humanYears - 2;
    const result = humanYearsExceptFirstYears * DOG_OTHER_YEAR_MULTIPLIER;
    return result + CAT_DOG_FIRST_YEAR_MULTIPLIER + CAT_DOG_SECOND_YEAR_MULTIPLIER;
}

module.exports = {humanYearsCatYearsDogYears};