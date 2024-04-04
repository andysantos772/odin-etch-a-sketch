function createGrid(size) {
    if (size < 16 || size > 100) {
        return ;
    }
    const grid = document.querySelector('.container');
    const square_size = Math.floor(grid.clientHeight / size);
    for (let x = 0; x < size; x++) {
        const row = document.createElement("div");
        for (let y = 0; y < size; y++) {
            const col = document.createElement("div");
            col.className = "square";
            col.style.minHeight = `${square_size}px`;
            col.style.minWidth = `${square_size}px`;
            col.addEventListener("mouseover", () => addColor(col));
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

function getRandomColor() {
    const red = Math.random() * (256 - 0);
    const green = Math.random() * (256 - 0);
    const blue = Math.random() * (256 - 0);
    return `rgb(${red},${green},${blue})`
  }

function addColor(square) {
    if (!square.style.backgroundColor) {
        square.style.backgroundColor = getRandomColor();
    }
    square.style.opacity = Number(square.style.opacity) + 0.1;
}

// Create a 16x16 grid when the page loads
createGrid(16)
