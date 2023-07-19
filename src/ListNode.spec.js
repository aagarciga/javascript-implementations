import ListNode from "./ListNode";

describe("Node should", () => {
  test("be able to create instances with a value and null next references", () => {
    const node = new ListNode(1);
    expect(node.value).toEqual(1);
    expect(node.next).toEqual(null);
  });
});
