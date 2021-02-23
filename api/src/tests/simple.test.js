import test from "tape";

test("timing test", function (t) {
    t.plan(3);

    t.equal(typeof Date.now, "function");
    t.equal(typeof {}, "object");
    t.equal(typeof [], "object");
});

const getArray = (count) => new Promise((resolve, reject) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(i);
    }
    resolve(arr);
});

test("test using promises", async (t) => {
    const result = await getArray(10);
    t.equal(result.length, 10);
});