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

  describe("work properly when shifting and", () => {
    test("be able to shift one element when containing two", () => {
      const list = new LinkedList();
      list.push(7);
      list.push(8);

      expect(list.length).toBe(2);
      expect(list.head.value).toEqual(7);
      expect(list.tail.value).toEqual(8);

      const node = list.shift();

      expect(list.length).toBe(1);
      expect(list.head.value).toBe(8);
      expect(list.tail.value).toBe(8);
      expect(node.value).toEqual(7);
    });

    test("be able to shift one element when containing one and be empty after that", () => {
      const list = new LinkedList();
      list.push(7);

      expect(list.length).toBe(1);
      expect(list.head.value).toEqual(7);

      let node = list.shift();

      expect(list.length).toBe(0);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(node.value).toEqual(7);

      node = list.shift();
      expect(node).toBeUndefined();
    });
  });

  describe("work properly when unshifting and", () => {
    test("be able to unshift one element when empty", () => {
      const list = new LinkedList();

      expect(list.length).toBe(0);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();

      let node = list.unshift(7);

      expect(list.length).toBe(1);
      expect(list.head.value).toEqual(7);
      expect(list.tail.value).toEqual(7);
      expect(list.tail.next).toBeNull();
    });
    test("be able to unshift one element when containing one", () => {
      const list = new LinkedList();
      list.push(7);

      expect(list.length).toBe(1);
      expect(list.head.value).toEqual(7);

      list.unshift(8);

      expect(list.length).toBe(2);
      expect(list.head.value).toBe(8);
      expect(list.tail.value).toBe(7);
      expect(list.tail.next).toBeNull();
    });
  });

  describe("work properly when getting from an index and", () => {
    const list = new LinkedList();
    list.push(7);
    list.push(8);
    list.push(9);

    test("get the first element by passing 0 as index argument", () => {
      const node = list.get(0);
      expect(node.value).toBe(7);
    });

    test("get the second element by passing 1 as index argument", () => {
      const node = list.get(1);
      expect(node.value).toBe(8);
    });

    test("get the last element by passing length - 1 as index argument", () => {
      const node = list.get(list.length - 1);
      expect(node.value).toBe(9);
    });

    test("get null when index is outof boud or the list is emptpy", () => {
      const emptyList = new LinkedList();
      const node = emptyList.get(0);

      expect(node).toBeNull();
    });
  });

  describe("work properly when setting from an index and", () => {
    const list = new LinkedList();
    list.push(7);
    list.push(8);
    list.push(9);

    test("update the first node value", () => {
      const result = list.set(0, 6);
      const node = list.get(0);
      expect(result).toBe(true);
      expect(node.value).toBe(6);
    });

    test("update the second node value", () => {
      const result = list.set(1, 5);
      const node = list.get(1);
      expect(result).toBe(true);
      expect(node.value).toBe(5);
    });

    test("update the last node value", () => {
      const lastIndex = list.length - 1;
      const result = list.set(lastIndex, 4);
      const node = list.get(lastIndex);
      expect(result).toBe(true);
      expect(node.value).toBe(4);
    });

    test("return false when out of index", () => {
      const result = list.set(3, 3);
      expect(result).toBe(false);
    });
  });
});
