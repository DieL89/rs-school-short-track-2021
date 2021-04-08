const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const tmp = new ListNode();
    tmp.value = element;

    if (!this.head) {
      this.head = tmp;
      this.tail = tmp;
    } else {
      this.tail.next = tmp;
      this.tail = tmp;
    }

    this.length++;
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }

    const tmp = this.head;
    this.head = tmp.next;
    this.length--;

    if (this.head === null) {
      this.tail = null;
    }

    return tmp.value;
  }
}

module.exports = Queue;
