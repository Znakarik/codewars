const {bmi} = require("../../../src/8-kyu/3-calculate-bwi/CalculateBMI.js")
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(bmi(80, 1.80), "Normal");
    });
});

