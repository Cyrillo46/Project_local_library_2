function getTotal(items) {
  const totalItems = items.length;
  return totalItems;
}


function getTotalBooksCount(books) {
  return getTotal(books)
}

function getTotalAccountsCount(accounts) {
  return getTotal(accounts)
}

function getBooksBorrowedCount(books) {
  // what we'll return
  let total = 0;
  // iterate through books
  for (let i = 0; i < books.length; i++) {
    // assign individual book variable
    let book = books[i];
    // if the book is not returned, add to total
    if (book.borrows[0].returned === false) total++;
  }
  return total;
}

function getMostCommonGenres(books) {
  let countObj = {};
  books.forEach((book) => {
    if (countObj[book.genre] != null) {
      countObj[book.genre]++;
    } else {
      countObj[book.genre] = 1;
    }
  });
  let countArray = [];
  for (let [key, value] of Object.entries(countObj)) {
    countArray.push({
      name: key,
      count: value,
    });
  }
  countArray.sort((a, b) => b.count - a.count);
  return countArray.slice(0, 5);
}

function getMostPopularBooks(books) {
  let countObj = {};
  books.forEach((book) => {
    if (!countObj[book.title]) {
      countObj[book.title] = book.borrows.length;
    } else {
      countObj[book.title] = 1;
    }
  });
  let countArray = [];
  for (let [key, value] of Object.entries(countObj)) {
    countArray.push({
      name: key,
      count: value,
    });
  }
  countArray.sort((a, b) => b.count - a.count);
  return countArray.slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  ​
    // Return our result of the chained methods 
    return books
  ​
      // First we reduce - fancy method to morph an array into a different dataset 
      .reduce((acc, book) => {
  ​
        // Find our author data with the helper function 
        let authorData = findAuthorById(authors, book.authorId);
  ​
        // See if we've made an author in our accumulator yet 
        let authorExists = acc.find(author => {
          return author.name === `${authorData.name.first} ${authorData.name.last}`;
        });
  ​
        // Add to its count if exists or push a new author if not 
        if (authorExists) {
          authorExists += book.borrows.length;
        } else {
          acc.push({
            name: `${author.name.first} ${author.name.last}`,
            count: book.borrows.length
          });
        }
  ​
        // Return what we did to the next iteration so it accumulates 
        return acc;
      }, [])
  ​
      // Then we sort the array by count 
      .sort((a, b) => b.count - a.count)
  ​
      // And then we slice it to get the top 5 
      .slice(0, 5)
  }
  

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
