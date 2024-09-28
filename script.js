let inventory=[];
let counter=0;
function addBook(){
    const book ={
        id: counter+1,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        price : document.getElementById('price').value,
      quantity: document.getElementById('quantity').value,
    };
    inventory.push(book);
    counter++;
 document.getElementById('addBookForm').reset();
    showBooks();

}
function showBooks(){
    const inventoryList= document.getElementById('inventory');
    inventoryList.innerHTML='';
     for(let i=0;i<inventory.length;i++){
        const book= inventory[i];
        const listItem=document.createElement('li');
        listItem.innerText=`ID: ${book.id}   Book Name: ${book.title}   Book Author: ${book.author}    price $${book.price}     quantity ${book.quantity}`;
        inventoryList.appendChild(listItem);
     }
}
function serch(){
    const searchTerm =document.getElementById('target').value;
     const searchResults=document.getElementById('serchedBooks');
    serchedBooks.innerHTML='';

    if(inventory.length===0){
        const listItem=document.createElement('li');
        listItem.innerText=`No Book in the inventory`;
        searchResults.appendChild(listItem);
        document.getElementById('serch').reset();
         return;
    }
    const filteredInventory = inventory.filter(book =>
        book.id.toString().includes(searchTerm) ||
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
      );
  
      if (filteredInventory.length === 0) {
        const listItem = document.createElement('li');
        listItem.innerText = 'No books found';
        searchResults.appendChild(listItem);
      } else {
        filteredInventory.forEach(book => {
          const listItem = document.createElement('li');
          listItem.innerText = `${book.id}: ${book.title} by ${book.author} - $${book.price} (${book.quantity} available)`;
          searchResults.appendChild(listItem);
        });
      }
       document.getElementById('serch').reset();
}
function buyBook(){
    const searchTerm=document.getElementById('titletoBuy').value;
    const Booktobuy=document.getElementById('Booktobuy');
    const sold=document.getElementById('Sold').value;
    const quantitytoBuy=document.getElementById('quantitytoBuy').value;
    Booktobuy.innerHTML='';
    if(inventory.length===0){
        const listItem=document.createElement('li');
        listItem.innerText=`No Book in the inventory`;
        Booktobuy.appendChild(listItem);
        document.getElementById('buyBook').reset();
         return;
      }
      const filteredInventory = inventory.filter(book =>
        book.title.toLowerCase().includes(searchTerm)
      );
      if(filteredInventory.length===0){
        const listItem = document.createElement('li');
        listItem.innerText = 'No books found';
        Booktobuy.appendChild(listItem);
      }else{
        const book = filteredInventory[0];
    if (sold < book.price * quantitytoBuy) {
      const listItem = document.createElement('li');
      listItem.innerText = 'Insufficient funds!';
      Booktobuy.appendChild(listItem);
      document.getElementById('buyBookForm').reset();
      return;
    } else if (quantitytoBuy > book.quantity) {
      const listItem = document.createElement('li');
      listItem.innerText = 'Insufficient quantity!';
      Booktobuy.appendChild(listItem);
      document.getElementById('buyBookForm').reset();
      return;
    } else {
      book.quantity -= quantitytoBuy;
      if (book.quantity === 0) {
        const index = inventory.findIndex(b => b.id === book.id);
        inventory.splice(index, 1);
      }
      const listItem = document.createElement('li');
      listItem.innerText = `You bought ${quantitytoBuy} copies of ${book.title} by ${book.author}. Total cost: $${(book.price * quantitytoBuy).toFixed(2)}`;
      Booktobuy.appendChild(listItem);
      document.getElementById('buyBookForm').reset();
    }
  }
}

      
