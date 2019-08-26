'use strict';

const {Stack, Queue} = require('../stacks-and-queues');

let stack, queue;


beforeEach(() => {
  stack = new Stack();
  queue = new Queue();
});


describe('Testing Stack', () => {

  it('can successfully push onto a stack', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.toString()).toEqual(`[1]`);
  });

  it('can successfully push multiple values onto a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toString()).toEqual(`[3, 2, 1]`);
  });

  it('can successfully pop off the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });

  it('can successfully empty a stack after multiple pops', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('can successfully peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    stack.pop();
    expect(stack.peek()).toEqual(1);
  });

  it('can successfully instantiate an empty stack', () => {
    expect(stack).toBeTruthy();
    expect(stack.isEmpty()).toBeTruthy();
  });

});


describe('Testing Queue', () => {

  it('can successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.toString()).toEqual(`[1]`);
  });

  it('can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toString()).toEqual(`[1, 2, 3]`);
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
    queue.dequeue();
    expect(queue.peek()).toEqual(2);
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('can successfully instantiate an empty queue', () => {
    expect(queue).toBeTruthy();
    expect(queue.isEmpty()).toBeTruthy();
  });

});
