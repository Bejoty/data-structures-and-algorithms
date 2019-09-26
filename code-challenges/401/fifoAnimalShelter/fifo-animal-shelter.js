'use strict';

const Queue = require('../util/queue');


/**
 * Represents a first-in-first-out animal shelter for dogs and cats.
 * @class AnimalShelter
 */
class AnimalShelter {

  /**
   * Instantiates an AnimalShelter object.
   */
  constructor() {
    this.place = 0;
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  /**
   * Enqueues an animal into the shelter by species attribute.
   * Expects the attribute `species` to equal one of 'dog' or 'cat'.
   * @param {Object} animal
   */
  enqueue(animal) {
    this.place++;
    if (animal.species === 'dog') {
      this.dogs.enqueue({...animal, place: this.place});
    }
    if (animal.species === 'cat') {
      this.cats.enqueue({...animal, place: this.place});
    }
  }

  /**
   * Dequeues an animal from the shelter based on a preference.
   * If the preference is 'dog' or 'cat', this returns the oldest animal of that
   * kind from the shelter. If no preference or a different preference is given,
   * this returns the oldest animal in the shelter.
   * @param {string} preference - The preferred animal species
   * @returns {Object} An animal object
   */
  dequeue(preference) {
    if (preference === 'dog') {
      return this.dogs.dequeue();
    }
    if (preference === 'cat') {
      return this.cats.dequeue();
    }

    // No preference / unknown preference -> return first in line
    const peekDog = this.dogs.peek();
    const peekCat = this.cats.peek();

    if (!peekDog || peekCat.place < peekDog.place) {
      return this.cats.dequeue();
    }
    if (!peekCat || peekDog.place < peekCat.place) {
      return this.dogs.dequeue();
    }
  }
}


module.exports = AnimalShelter;
