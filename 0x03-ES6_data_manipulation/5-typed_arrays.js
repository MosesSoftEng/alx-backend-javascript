export default function createInt8TypedArray(length, position, value) {
  // Create an ArrayBuffer with the specified length.
  const buffer = new DataView(new ArrayBuffer(length));

  // Check if the position is within range.
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a view of the ArrayBuffer as an Int8 typed array.
  buffer.setInt8(position, value);

  return buffer;
}
