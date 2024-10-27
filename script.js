const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", yearPublished: 1937 },
  { title: "1984", author: "George Orwell", yearPublished: 1949 },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    yearPublished: 1954,
  },
];



let grouped = books.reduce((acc, book) => {

  acc[book.author] = acc[book.author] || [];
  acc[book.author].push({
    title: book.title,
    yearPublished: book.yearPublished,
  });
  return acc;
}, {});

console.log(grouped);
