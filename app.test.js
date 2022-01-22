const createCardboard = (rows, columns) => {
  const cardboard = [[]];
  for (let i = 0; i < rows; i++) {
    cardboard[i] = [];
    for (let j = 0; j < columns; j++) {
      cardboard[i][j] = `${i}-${j}`;
    }
  }
  return cardboard;
};

console.table(createCardboard(10, 10));

describe("Given a crateCardboard", () => {
  describe("When it receives 2, 2", () => {
    test("It should return [['0-0','0-1'],['1-0','1-1']]", () => {
      const number1 = 2;
      const number2 = 2;
      const expecedCardboard = [
        ["0-0", "0-1"],
        ["1-0", "1-1"],
      ];

      const generatedCardboard = createCardboard(number1, number2);

      expect(generatedCardboard).toStrictEqual(expecedCardboard);
    });
  });
});
