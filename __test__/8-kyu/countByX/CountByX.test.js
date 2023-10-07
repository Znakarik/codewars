const {deepEqual} = require("assert");
const { countBy } = require("../../../src/8-kyu/countByX/CountByX");


describe("Basic Tests",function(){
    it("Testing for fixed tests", () => {
        deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
        deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
    });
});