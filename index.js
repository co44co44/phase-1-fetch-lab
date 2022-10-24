/*function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
  fetch('https://anapioficeandfire.com/api/books')
  .then((resp) => resp.json())
  //.then((books) => books.forEach (book => console.log (book.name))) 
  .then((books) => console.log (books));
  //console.log (books)
  return books;
}*/

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((books) => books.forEach (book => renderBooks (book.name))) 
 
}

function renderBooks(book){
  let card = document.createElement ('li')
  card.className='card'
  card.innerHTML = `
  <div class='content>
    <h4> 'Book Titles'</h4>
    <p> ${book.name}</p>
  </div>`
  document.querySelector ('main').appendChild (card)
}
