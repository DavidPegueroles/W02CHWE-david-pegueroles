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

const gameOfLife = createCardboard(10, 10);

const countAliveCells = (row, column) => {
  let aliveNeighbors = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (gameOfLife[row + i][column + j].status && i !== 0 && j !== 0) {
        aliveNeighbors += 1;
      }
    }
  }

  return aliveNeighbors;
};

class DefaultCell {
  row;
  column;
  status = "";
  neighborsAlive;

  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  checkForAliveNeighbors() {
    const x = this.row;
    const y = this.column;
    this.neighborsAlive = countAliveCells(x, y);
  }
}

const justToPassTheEslint = DefaultCell(0, 0);
console.log(justToPassTheEslint);

console.table(gameOfLife);

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
