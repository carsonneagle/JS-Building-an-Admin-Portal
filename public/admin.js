async function main() {
    let response = await fetch('localhost:3001/listBooks');

// Your Code Here
    let books = await response.json();

    books.forEach(renderBook)
}

    function renderBook(book) {
        let root = document.querySelector("#root");

        let li = document.createElement('li');
        li.textContent = book.title

        let quantityInput = document.createElement('input');
        quantityInput.value = book.quantity

        let saveButton = document.createElement('button')
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', function(){
            fetch('localhost:3001/updateBook', {
                method: 'Patch',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: book.id,
                    quantity: quantityInput.value
                })
            })
        })

        li.append(quantityInput, saveButton);
        root.append(li);

    }
