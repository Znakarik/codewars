const {humanYearsCatYearsDogYears} = require("../../../src/8-kyu/5-cat-years-dog-years/CatTearsDogYears.js")
const {deepEqual} = require("assert");

describe("Example Tests", function() {

    it("one", function() {
        deepEqual(humanYearsCatYearsDogYears(1), [1,15,15]);
    });

    it("two", function() {
        deepEqual(humanYearsCatYearsDogYears(2), [2,24,24]);
    });

    it("ten", function() {
        deepEqual(humanYearsCatYearsDogYears(10), [10,56,64]);
    });

});


