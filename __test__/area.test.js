const area = require("../area");


test("Input interi positivi", () => {
    expect(area([1,2])).toEqual(2);
    expect(area([300,2])).toEqual(600);
});

test("Input interi positivi e negativi", () => {
    expect(area([-1,2])).toEqual(-1);
    expect(area([300,-2])).toEqual(-1);
});

test("Input interi negativi", () => {
    expect(area([-1,-2])).toEqual(-1);
    expect(area([-300,-2])).toEqual(-1);
});

test("Input non interi", () => {
    expect(area(["esame","is2"])).toEqual(-1);
    expect(area(["ciao",3])).toEqual(-1);
});

test("Input boundary value", () => {
    expect(area([0,0])).toEqual(0);
    expect(area([0,-1])).toEqual(-1);
});