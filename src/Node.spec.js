import Node from "./Node";

describe("Node should", () => {
  test("be able to create instances with a value and null next references", () => {
    const node = new Node(1);
    expect(node.value).toEqual(1);
    expect(node.next).toEqual(null);
  });
});
