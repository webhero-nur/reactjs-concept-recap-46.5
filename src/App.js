import './App.css';
import Blog from './components/Blog/Blog';
import Mobile from './components/Mobile/Mobile';
import Todos from './components/Todos/Todos';

function App() {
  const [newHeading, newAuthor] = ['No shortcut to success', 'Sharon'];
  return (
    <div className="App">
      <Todos></Todos>
      <Mobile></Mobile>
      <Blog heading='My Tour Blog' author='MySelf'></Blog>
      <Blog heading='Experience of ePassport' author='Mr. Alex'></Blog>
      <Blog heading={newHeading} author={newAuthor}></Blog>
      <Article></Article>
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
