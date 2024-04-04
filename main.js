function createGrid(size) {
    if (size < 16 || size > 100) {
        return ;
    }
    const grid = document.querySelector('.container');
    const square_size = Math.floor(grid.clientHeight / size);
    console.log(square_size);
    for (let x = 0; x < size; x++) {
        const row = document.createElement("div");
        for (let y = 0; y < size; y++) {
            const col = document.createElement("div");
            col.className = "square";
            col.style.minHeight = `${square_size}px`;
            col.style.minWidth = `${square_size}px`;
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

// Create a 16x16 grid when the page loads
createGrid(16)