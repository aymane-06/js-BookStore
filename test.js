let inventory = [];
let counter = 0;

function addBook() {


  const book = {
    id: counter + 1,
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quantity").value
  };

  inventory.push(book);
  counter++;
  showBooks();
   document.getElementById("addBookForm").reset();
}

function showBooks() {
  const inventoryList = document.getElementById("inventory");
  inventoryList.innerHTML = "";

  for (let i = 0; i < inventory.length; i++) {
    const book = inventory[i];
    const listItem = document.createElement("li");
    listItem.textContent = `${book.id}: ${book.title} by ${book.author} - $${book.price} (${book.quantity} available)`;
    inventoryList.appendChild(listItem);
  }
}
