import './App.css';

function App() {
  return (
    <div className="App">
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
        <h2 style={titleStyle}>Title: </h2>
        <p style={{ fontWeight: '900' }}>This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey. </p>
      </article>
    </div>
  )
}

export default App;
