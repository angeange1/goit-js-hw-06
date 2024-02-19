'use strict'

class StringBuilder {
  #value
  constructor(initialValue) { this.#value = initialValue }
  
  getValue() { return this.#value }
  padEnd(str) {
    const totalLength = this.#value.length + str.length
    this.#value = this.#value.padEnd(totalLength, str)
  }
  padStart(str) {
    const totalLength = this.#value.length + str.length
    this.#value = this.#value.padStart(totalLength, str)
  }
  padBoth(str) {
    this.padStart(str)
    this.padEnd(str)
  }
}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="