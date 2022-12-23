/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (typeof this.evacuationWarningMessage !== 'function' && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
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
