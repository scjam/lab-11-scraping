const parser = document => {
  const books = document.querySelectorAll('.product_pod');

  return [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    coverImage: book.querySelector('img').src,
    rating: book.querySelector('p').classList[1],
    price: book.querySelector('.price_color').textContent.trim(),
    inStock: !book.querySelector('icon-ok').textContent
  }));
};

module.exports = parser;
