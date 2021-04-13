// find the account by id number
function findAccountById(accounts, id) {
  // for each account, if account id matches id number return true
  let found = accounts.find((account) => account.id === id);
  // return matching account
  return found;
}

function sortAccountsByLastName(accounts) {
  // if the last name selected is larger than the compared last name, push it towards the right 
 const sorted = accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1);
  // return sorted array
  return sorted;
}

function getTotalNumberOfBorrows(account, books) { 
  // our container
  let count = 0
  // for each book object
  const borrowed = books.forEach(book => {
    // check each book's borrowed array
    book.borrows.forEach(borrow => {
      // if the borrow id matches the account id, add to counter
      if (borrow.id === account.id) {
        count += 1
      }
    })
  })
     // return the sum of the counter
     return count
   }
  
function getBooksPossessedByAccount(account, books, authors) {
  // filter through each book
  const possessed = books.filter((book) => 
     // check if the borrow id matches the given account id and if the book was NOT returned
   book.borrows.some(borrow => borrow.id === account.id && borrow.returned === false))
  //                                
  return possessed.map(book => ({ ...book, author: authors.find(author => author.id === book.authorId) }))
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
