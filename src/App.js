import './App.css';

const books = [
  {
    id: 1,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    img: 'https://m.media-amazon.com/images/I/71XEsXS5RlL._AC_UY218_.jpg',
  },
  {
    id: 2,
    title: 'Kabir the Great Mystic',
    author: 'Pranay',
    img: 'https://m.media-amazon.com/images/I/71Bn+Y-vDqL._AC_UY218_.jpg',
  },
  {
    id: 3,
    title: 'Amazon Unbound',
    author: 'Brad Stone',
    img: 'https://m.media-amazon.com/images/I/71G-FiyJFtL._AC_UY218_.jpg',
  },
];

const Book = (props) => {

  const bookName = (title) => {
    console.log(title);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  const buyNow = () => {
    alert('Book added to cart');
  };

  const { img, author, title } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h3>{author}</h3>
      <button type="button"
      onClick={() => bookName(title)}
      className='btn'>Book</button>
      <button type="button"
      onClick={() => complexExample(author)}
      className='btn'>Author</button>
      <button type="button"
      className='btn'
      onClick={() => buyNow()}>buy now</button>
    </article>
  )
}

function App() {
  return (
    <>
      <nav className='navbar'>
        <h1>Amazon Bestsellers</h1>
        <p>Our most popular products based on sales. Updated frequently.</p>
      </nav>
      <section className="bookList">
        {books.map((book) => {
          const { id } = book;
          return <Book key={id} book={book} />
        })}
      </section>
    </>
  );
}

export default App;
