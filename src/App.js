import './App.css';

function App() {
  return (
    <div className="App">
      <Article></Article>
    </div>
  );
}

function Article() {
  return (
    <div>
      <article className='blog'>
        <h1>Title: </h1>
        <p>Body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita labore similique rerum alias suscipit quam nihil officia! Debitis reprehenderit dolor accusantium odio pariatur provident, ullam fuga suscipit excepturi cupiditate incidunt, optio maiores esse vel quos voluptas iusto voluptatibus, earum ut porro dolorem? Obcaecati tenetur, consequuntur culpa earum beatae debitis.</p>
      </article>
    </div>
  )
}

export default App;
