// app.js
const express = require('express');
const app = express();
const port = 3000;

// Array de objetos representando o BD de livros
const books = [
  { id: 1, title: 'A Revolução dos Bichos', author: 'George Orwell', year: 1945 },
  { id: 2, title: 'Dom Quixote', author: 'Miguel de Cervantes', year: 1605 },
  { id: 3, title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez', year: 1967 },
  { id: 4, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 5, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', year: 1954 },
  { id: 6, title: 'Crime e Castigo', author: 'Fiódor Dostoiévski', year: 1866 },
  { id: 7, title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', year: 1943 },
  { id: 8, title: 'A Metamorfose', author: 'Franz Kafka', year: 1915 },
  { id: 9, title: 'Orgulho e Preconceito', author: 'Jane Austen', year: 1813 },
  { id: 10, title: 'A Arte da Guerra', author: 'Sun Tzu', year: 'século IV a.C.' },
  { id: 11, title: 'A Cinco Passos de Você', author: 'Rachael Lippincott', year: 2018 },
  { id: 12, title: 'Como Eu Era Antes de Você', author: 'Jojo Moyes', year: 2012 },
  { id: 13, title: 'A Culpa é das Estrelas', author: 'John Green', year: 2012 },
  { id: 14, title: 'O Diário de uma Paixão', author: 'Nicholas Sparks', year: 1996 },
  { id: 15, title: 'P.S. Eu Te Amo', author: 'Cecelia Ahern', year: 2004 }
];

// Configurando o EJS como template engine
app.set('view engine', 'ejs');

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/search', (req, res) => {
  const searchByTitle = req.query.title;
  const searchByYear = req.query.year;

  let searchResult = [];

  if (searchByTitle) {
    // Expressão regular para buscar o título que contenha a palavra ou inicie com a letra inserida pelo usuário
    const regex = new RegExp(`^${searchByTitle}`, 'i');
    searchResult = books.filter(book => regex.test(book.title));
  } else if (searchByYear) {
    searchResult = books.filter(book => book.year === parseInt(searchByYear));
  } else {
    // If no search parameters are provided, return all books
    searchResult = books;
  }

  res.render('search', { searchResult });
});



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
