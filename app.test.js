const cardboard = [[]];

const createCardboard = (rows, columns) => {
  for (let i = 0; i < rows; i++) {
    cardboard[i] = [];
    for (let j = 0; j < columns; j++) {
      cardboard[i][j] = `${i}-${j}`;
    }
  }
};

createCardboard(10, 10);
console.table(cardboard);
