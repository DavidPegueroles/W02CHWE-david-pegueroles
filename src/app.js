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
    // eslint-disable-next-line no-use-before-define
    this.neighborsAlive = countAliveCells(x, y);
  }

  nextGeneration() {
    if (this.status) {
      if (this.aliveNeighbors < 2 || this.aliveNeighbors > 3) {
        this.status = "";
      }
    } else if (this.aliveNeighbors === 3) {
      this.status = "alive";
    }
  }
}

const createCardboard = (rows, columns) => {
  const cardboard = [[]];
  for (let i = 0; i < rows; i++) {
    cardboard[i] = [];

    const divOut = document.createElement("div");
    divOut.id = `${i}`;
    divOut.className = "divOut";

    document.querySelector("#megaGrid").appendChild(divOut);

    for (let j = 0; j < columns; j++) {
      cardboard[i][j] = new DefaultCell(i, j);

      const divInside = document.createElement("div");
      divInside.id = `${i}-${j}`;
      divInside.className = "divInside";

      divOut.appendChild(divInside);
    }
  }
  return cardboard;
};

const setRow = 10;
const setColumn = 10;

let gameOfLife = createCardboard(setRow, setColumn);

document.getElementById("size__button").onclick = function changeSize() {
  const size = document.getElementById("size__bar").value;
  document.getElementsByClassName("divInside").style.width = size;
  document.getElementsByClassName("divInside").style.height = size;
};

const countAliveCells = (row, column) => {
  let aliveNeighbors = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (row === 0 && column === 0 && i !== -1 && j !== -1) {
        if (gameOfLife[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (row === 0 && column === setColumn - 1 && i !== -1 && j !== 1) {
        if (gameOfLife[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (row === setRow - 1 && column === 0 && i !== 1 && j !== -1) {
        if (gameOfLife[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (
        row === setRow - 1 &&
        column === setColumn - 1 &&
        i !== 1 &&
        j !== 1
      ) {
        if (gameOfLife[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (row === 0 && i !== -1) {
        if (gameOfLife[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (row === setRow - 1 && i !== 1) {
        if (gameOfLife[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (column === 0 && j !== -1) {
        if (gameOfLife[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (column === setColumn - 1 && j !== 1) {
        if (gameOfLife[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (gameOfLife[row + i][column + j].status && i !== 0 && j !== 0) {
        aliveNeighbors += 1;
      }
    }
  }

  return aliveNeighbors;
};

// ----- DOM Declarations ------------------------------------

// ----- Tests -----------------------------------------------

describe("Given a crateCardboard function", () => {
  describe("When it receives 2, 2", () => {
    test("It should return [['0-0','0-1'],['1-0','1-1']]", () => {
      const number1 = 2;
      const number2 = 2;
      const expectedCardboard = [
        ["0-0", "0-1"],
        ["1-0", "1-1"],
      ];

      const generatedCardboard = createCardboard(number1, number2);

      expect(generatedCardboard).toStrictEqual(expectedCardboard);
    });
  });
});

describe("Given a gameOfLife and countAliveCells functions", () => {
  describe("When it receives 3,3 and 1,1 respectively", () => {
    test.only("It should return 0", () => {
      const number1 = 3;
      const number2 = 3;
      const number3 = 1;
      const number4 = 1;
      const expectedNumber = 0;

      gameOfLife = createCardboard(number1, number2);
      const numberOfActiveCells = countAliveCells(number3, number4);

      expect(numberOfActiveCells).toBe(expectedNumber);
    });
  });

  describe("When it receives 3,3 and 1,1 respectively, and assign 'alive' to gameOfLife[0][0]", () => {
    test.only("It should return 1", () => {
      const number1 = 3;
      const number2 = 3;
      const number3 = 1;
      const number4 = 1;
      const number5 = 0;
      const number6 = 0;
      const expectedNumber = 1;

      gameOfLife = createCardboard(number1, number2);
      gameOfLife[number5][number6].status = "alive";
      const numberOfActiveCells = countAliveCells(number3, number4);

      expect(numberOfActiveCells).toBe(expectedNumber);
    });
  });
});
