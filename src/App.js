import './App.css';
import Blog from './components/Blog/Blog';

function App() {
  const [newHeading, newAuthor] = ['No shortcut to success', 'Billi Sharon']
  return (
    <div className="App">
      <Article></Article>
      <Blog heading='My Sundarban Blog' author='MySelf'></Blog>
      <Blog heading='Experience of ePassport in BD' author='Mr. Alief Hossain'></Blog>
      <Blog heading={newHeading} author={newAuthor}></Blog>
    </div>
  );
}

function Article() {

  const titleStyle = {
    color: 'Blue',
    backgroundColor: 'yellow',
    textDecoration: 'underline',
    borderRadius: '10px',
    padding: '5px'
  }

  return (
    <div>
      <article className='blog'>
        <h2 style={titleStyle}>Article</h2>
        <p style={{ fontWeight: '900' }}>This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey. </p>
      </article>
    </div>
  )
}

export default App;
