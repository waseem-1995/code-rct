import MyArray from "../index";

global.score = 1;

describe("Custom Array function tests", () => {
  test("Should have defined MyArray", () => {
    expect(MyArray).toBeDefined();
    const c = new MyArray();
    expect(c).toBeInstanceOf(MyArray);
    global.score += 1;
  });

  test("length property should work", () => {
    const c = new MyArray();
    expect(c.length).toBe(0);
    console.log(c);
    global.score += 1;
  });
  test("push method should be implemented properly", () => {
    expect(MyArray).toBeDefined();
    const c = new MyArray();
    expect(c).toBeInstanceOf(MyArray);
    expect(c.push).toBeDefined();
    c.push(10);
    console.log(c.push);
    expect(c.length).toBe(1);
    global.score += 1;
  });
  test("pop method should work properly", () => {
    expect(MyArray).toBeDefined();
    const c = new MyArray();
    expect(c).toBeInstanceOf(MyArray);
    expect(c.pop).toBeDefined();
    c.push(5);
    c.push(8);
    c.push(6);
    expect(c.length).toBe(3);
    expect(c.pop()).toBe(6);
    c.pop();
    expect(c.length).toBe(1);
    expect(c.pop()).toBe(5);
    expect(c.length).toBe(0);
    global.score += 2;
  });
  test("map method should work properly", () => {
    expect(MyArray).toBeDefined();
    const c = new MyArray();
    expect(c).toBeInstanceOf(MyArray);
    expect(c.map).toBeDefined();
    c.push(5);
    c.push(8);
    c.push(6);
    let newArr = c.map((ele) => ele + 10);
    console.log(newArr);
    expect(newArr).toBeInstanceOf(MyArray);
    expect(newArr.length).toBe(3);
    expect(newArr[0]).toBe(15);
    expect(newArr[newArr.length - 1]).toBe(16);
    global.score += 2;
  });
  test("Filter should work properly", () => {
    expect(MyArray).toBeDefined();
    const c = new MyArray();
    expect(c).toBeInstanceOf(MyArray);
    expect(c.filter).toBeDefined();
    c.push(10);
    c.push(5);
    c.push(8);
    c.push(7);
    c.push(11);
    let newArr = c.filter((ele) => ele % 2);
    console.log(newArr);
    expect(newArr).toBeInstanceOf(MyArray);
    expect(newArr.length).toBe(3);
    expect(newArr[0]).toBe(5);
    expect(newArr[newArr.length - 1]).toBe(11);
    global.score += 2;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
