document.getElementById('procesar').addEventListener('click', processNumbers);

function processNumbers() {
    const input = document.getElementById('textArea').value;
    const numbers = input.split(/\s+/).filter(num => num.trim() !== ''); // Filtra espacios en blanco

    const numberList = document.getElementById('numberList');
    numberList.innerHTML = ''; // Limpia la tabla existente

    numbers.forEach((number, index) => {
        const row = document.createElement('tr'); // Crea una nueva fila
        const cellIndex = document.createElement('td'); // Crea una celda para el índice
        const cellNumber = document.createElement('td'); // Crea una celda para el número

        cellIndex.textContent = index + 1; // Asigna el índice
        cellNumber.textContent = number; // Asigna el número

        row.appendChild(cellIndex); // Agrega la celda del índice a la fila
        row.appendChild(cellNumber); // Agrega la celda del número a la fila
        numberList.appendChild(row); // Agrega la fila a la tabla
    });
}

















