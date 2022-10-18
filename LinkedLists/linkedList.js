function LinkedList() {
  let head = null;
  let size = 0;

  function append(value) {
    const newNode = Node(value);
    if (head === null) {
      head = newNode;
    } else {
      let pointer = head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
    }
    size++;
  }
  function prepend(value) {
    const newNode = Node(value, head);
    head = newNode;
    size++;
  }

  function _size() {
    return size;
  }
  function _head() {
    return { value: head.value, next: head.next };
  }
  function tail() {
    let pointer = head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }

    return pointer;
  }
  function at(index) {
    let pointer = head;
    let indexNode = 0;
    while (indexNode < index) {
      pointer = pointer.next;
      indexNode++;
    }
    return pointer;
  }

  function pop() {
    let currPointer = head;
    let nextPointer = head.next;
    while (nextPointer.next !== null) {
      currPointer = currPointer.next;
      nextPointer = nextPointer.next;
    }
    const returnNode = nextPointer;
    currPointer.next = null;
    size--;
    return returnNode;
  }
  function contains(value) {
    let pointer = head;
    while (pointer.next !== null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }
  function find(value) {
    let pointer = head;
    let indexNode = 0;
    while (pointer.next !== null) {
      indexNode++;
      if (pointer.value === value) return indexNode;
      pointer = pointer.next;
    }
    return null;
  }
  function toString() {
    let pointer = head;
    let stringNodes = "";
    while (pointer.next !== null) {
      stringNodes += `(${pointer.value} ->)`;
      pointer = pointer.next;
      if (pointer.next === null) {
        stringNodes += `null`;
      }
    }
  }

  function insertAt(value, index) {
    if (index === 0) {
      prepend(value);
      return;
    }

    const beforeInsert = at(index - 1);
    const insert = new Node(value, beforeInsert.next);
    beforeInsert.next = insert;
    size++;
  }

  function removeAt(index) {
    if (index === 0) {
      head = head.next;
      return;
    }

    const beforeRemove = at(index - 1);
    beforeRemove.next = beforeRemove.next.next;
    size--;
  }
}

function Node(value = null, next = null) {
  return {
    value,
    next,
  };
}
