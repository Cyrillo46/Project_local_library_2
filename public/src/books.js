function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id)
  return found
}

function findBookById(books, id) {
  const found = books.find((book) => book.id === id)
  return found
}

function partitionBooksByBorrowedStatus(books) {
  // check for returned books
  const notReturned = books.filter((book) => book.borrows[0].returned === false) 
    const returnedBooks = books.filter((book) => book.borrows[0].returned === true) 
    
   return [notReturned, returnedBooks]

}

function getBorrowersForBook(book, accounts) {
  let final = []
  // our iteration and index of accounts
  for (let i = 0; i < accounts.length; i++) {
    // our iteration and index of borrowed books
    for (let j = 0; j < book.borrows.length; j++) {
      // if the length reaches 10, break
     if (final.length === 10){
        break
     }
      // first check if account id matches borrowed book id
     if (accounts[i].id === book.borrows[j].id) {
       // assign account returned as key and return status as values
       accounts[i].returned = book.borrows[j].returned;
       // push that account into final. array
       final.push(accounts[i]);
     }
    }
  }
  // return our new array
  return final
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
