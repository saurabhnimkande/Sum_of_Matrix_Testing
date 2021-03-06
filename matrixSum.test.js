const sum= require('./matrixSum');

test('sum([[5,8,8,7],[7,9,1,2],[2,5,7,9]],3,4) answer would be 70', () => {
    expect(sum([[5,8,8,7],[7,9,1,2],[2,5,7,9]],3,4)).toBe(70);
  });
  test('sum([[5,8,8,7],[7,9,1,2],[2,5,7,9]],3,4) answer would be 70', () => {
    expect(sum([[5,8,8,7],[7,9,1,2],[2,5,7,9]],3,4)).not.toBe(60);
  });
  
  test('sum([[5,8,8,7,7],[7,9,1,2,1],[2,5,7,9,6]],3,5) answer would be 84', () => {
    expect(sum([[5,8,8,7,7],[7,9,1,2,1],[2,5,7,9,6]],3,5)).toBe(84);
  });
  test('sum([[5,8,8,7,7],[7,9,1,2,1],[2,5,7,9,6]],3,5) answer would be 84', () => {
    expect(sum([[5,8,8,7,7],[7,9,1,2,1],[2,5,7,9,6]],3,5)).not.toBe(26);
  });
  
  test('sum([[5,8],[7,9],[2,5],[3,6],[7,2]],5,2) answer would be 54', () => {
    expect(sum([[5,8],[7,9],[2,5],[3,6],[7,2]],5,2)).toBe(54);
  });
  test('sum([[5,8],[7,9],[2,5],[3,6],[7,2]],5,2) answer would be 54', () => {
    expect(sum([[5,8],[7,9],[2,5],[3,6],[7,2]],5,2)).not.toBe(36);
  });
  
  test('sum([[5,8,5],[7,9,2],[2,5,1],[3,6,4]],4,3) answer would be 57', () => {
    expect(sum([[5,8,5],[7,9,2],[2,5,1],[3,6,4]],4,3)).toBe(57);
  });
  test('sum([[5,8,5],[7,9,2],[2,5,1],[3,6,4]],4,3) answer would be 57', () => {
    expect(sum([[5,8,5],[7,9,2],[2,5,1],[3,6,4]],4,3)).not.toBe(99);
  });
  