import LinkedList from "./LinkedList.js";

describe("LinkedList should", () => {
  test("be created with 0 length and null head and tail.", () => {
    const list = new LinkedList();
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  describe("work properly when pushing and", () => {
    test("be able to have length 1 and head and tail node value of 1 when added a Node[1, null] ", () => {
      const list = new LinkedList();

      list.push(7);

      expect(list.length).toBe(1);
      expect(list.head.value).toEqual(7);
      expect(list.tail.value).toEqual(7);
    });

    test("be able to have differents tail and head when two values are added", () => {
      const list = new LinkedList();
      list.push(7);
      list.push(8);

      expect(list.length).toBe(2);
      expect(list.head.value).toEqual(7);
      expect(list.tail.value).toEqual(8);
    });

    test("be able to have the correct head, tail and head.next node values when three values are added", () => {
      const list = new LinkedList();
      list.push(7);
      list.push(8);
      list.push(9);

      expect(list.length).toBe(3);
      expect(list.head.value).toEqual(7);
      expect(list.head.next.value).toEqual(8);
      expect(list.tail.value).toEqual(9);
    });

    test("be able to return the correct reference value", () => {
      const list = new LinkedList();
      list.push(7);
      list.push(8);
      const refList = list.push(9);

      expect(refList.length).toBe(3);
      expect(refList.head.value).toEqual(7);
      expect(refList.head.next.value).toEqual(8);
      expect(refList.tail.value).toEqual(9);
    });
  });

  describe("work properly when popping and", () => {
    test("be able to return undefined when empty", () => {
      const list = new LinkedList();
      const node = list.pop();
      expect(node).toBeUndefined();
    });
    test("be able to have length 1 and head and tail node value of 1 when removing one element of two existing", () => {
      const list = new LinkedList();

      list.push(7);
      list.push(8);

      expect(list.length).toBe(2);
      expect(list.head.value).toEqual(7);
      expect(list.tail.value).toEqual(8);

      const node = list.pop();

      expect(list.length).toBe(1);
      expect(list.head.value).toBe(7);
      expect(list.tail.value).toBe(7);
      expect(node.value).toEqual(8);
    });

    test("be able to be empty when removing all existing nodes", () => {
      const list = new LinkedList();

      list.push(7);
      list.push(8);

      expect(list.length).toBe(2);
      expect(list.head.value).toEqual(7);
      expect(list.tail.value).toEqual(8);

      const node = list.pop();

      expect(list.length).toBe(1);
      expect(list.head.value).toBe(7);
      expect(list.tail.value).toBe(7);
      expect(node.value).toEqual(8);

      list.pop();

      expect(list.length).toBe(0);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });
});
