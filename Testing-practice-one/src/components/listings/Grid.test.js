import data from "../../data/courses.json";
const numitems = data.length;
// Matchers
// test('Number of items =12',()=>{
// expect(numitems).toBe(11);
// }); error

describe("Number test", () => {
  test("Number of items =12", () => {
    expect(numitems).toBe(12);
  });
  test("Number of items to be greater than or equal to 12", () => {
    expect(numitems).toBeGreaterThanOrEqual(12);
  });
});
const dataTest = data[0].title;
describe("String test", () => {
  test("There is a Js in this title ", () => {
    expect(dataTest).toMatch(/JS/);
  });

  // test('This title contain react ',()=>{
  //     expect(dataTest).toContain('Angular');
  //     }); errror

  test("This title contain react ", () => {
    expect(dataTest).toContain("React");
  });
});
// Arrays&objects
const data2 = ["React Native", "React"];
describe("Arrays and objects tests", () => {
    test("The list of courses contains React Native and React", () => {
        expect(["React Native", "React", "MeteorJS"]).toEqual(
          expect.arrayContaining(data2)
        );
      });
      
      // Objects
      test("The first course to have a proterty title", () => {
        expect(data[0]).toHaveProperty("title");
      });
      
      test("The first course to have a proterty title and value of 31,266", () => {
        expect(data[0]).toHaveProperty("views", "31,266");
      });
});