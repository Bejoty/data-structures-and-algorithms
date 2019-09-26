'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

describe('#fifoAnimalShelter', () => {
  test('dequeueing an empty shelter returns null', () => {
    const shelter = new AnimalShelter();
    expect(shelter.dequeue()).toBeNull();
  });

  test('enqueues and dequeues expected objects', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({species: 'dog', name: 'Kali'});
    shelter.enqueue({species: 'dog', name: 'Milo'});
    shelter.enqueue({species: 'cat', name: 'Oliver'});
    shelter.enqueue({species: 'dog', name: 'Spike'});
    shelter.enqueue({species: 'cat', name: 'Ralph'});

    expect(shelter.dequeue().name).toEqual('Kali');
    expect(shelter.dequeue('cat').name).toEqual('Oliver');
    expect(shelter.dequeue('dog').name).toEqual('Milo');
    expect(shelter.dequeue('rabbit').name).toEqual('Spike');
    expect(shelter.dequeue().name).toEqual('Ralph');

    // Shelter should be empty
    expect(shelter.dequeue()).toBeNull();
  });
});
