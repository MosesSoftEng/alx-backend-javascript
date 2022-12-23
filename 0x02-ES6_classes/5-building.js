/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }

    this.sqft = sqft;
  }

  get sqft() {
    return this._amount;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('SQFT must be a number');
    }

    this._sqft = newSqft;
  }
}
