import React from 'react';

const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 3, title: "Wings of Fire", author: "A.P.J. Abdul Kalam" },
];

const BookDetails = () => {
  return (
    <div>
      <h2>📖 Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <b>{book.title}</b> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
