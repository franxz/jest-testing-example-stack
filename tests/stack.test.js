// 👋^-^👋
// this is really simple
// but... those functions aren't reusable between instances

function createStack() {
  return {
    _size: 0,
    _lastItem: undefined,

    push: function (item) {
      const itemContainer = {
        item,
        previousItem: this._lastItem,
      };
      this._size++;
      this._lastItem = itemContainer;
    },

    pop: function () {
      const poppedItem = this._lastItem;
      if (poppedItem !== undefined) {
        this._lastItem = poppedItem.previousItem;
        this._size--;
        return poppedItem.item;
      }
      return poppedItem;
    },

    peek: function () {
      return this._lastItem?.item;
    },

    size: function () {
      return this._size;
    },
  };
}

// describe *** define a test suite
// test/it  ***  individual test

describe("My stack", () => {
  let stack;

  beforeEach(() => {
    stack = createStack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("can push to the top", () => {
    const myBook = "📙";
    stack.push(myBook);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(myBook);
  });

  it("can pop off", () => {
    const myBook = "📙";
    stack.push(myBook);
    const myBookAgain = stack.pop();
    expect(stack.size()).toBe(0);
    expect(myBookAgain).toBe(myBook);
  });

  it("returns undefined if it is empty", () => {
    let poppedElement = " >.< ";
    poppedElement = stack.pop();
    expect(stack.size()).toBe(0);
    expect(poppedElement).toBe(undefined);
    expect(stack.peek()).toBe(undefined);
  });

  it.todo("can not overflow");
});
