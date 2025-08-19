// const lists = [
//   {
//     id: 1,
//     name: 'Bread',
//   },
//   {
//     id: 2,
//     name: 'Sugar',
//   },
//   {
//     id: 3,
//     name: 'Beans',
//   },
// ];
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}
function Container() {
  const [items, setItems] = useState([]);
  return (
    <div className="shopping-list">
      <Header />
      <Content setItems={setItems} />
      <ShoppingList lists={items} />
    </div>
  );
}
function Header() {
  return <h1 className="header">Shopping List</h1>;
}
function Content({ setItems }) {
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const addToList = () => {
    console.log(title, id, 'id');
    setItems((prev) => [...prev, { title, id }]);
    setId('');
    setTitle('');
  };
  return (
    <div className="content">
      <input
        className="input-field"
        placeholder="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '90px' }}
      />
      <input
        className="input-field"
        placeholder="14"
        value={id}
        onChange={(e) => setId(e.target.value)}
        type="text"
        style={{ width: '90px' }}
      />
      <Button
        onClick={addToList}
        backgroundColor="transparent"
        border=" 1px solid #FFD700"
        color="#FFD700"
        padding="5px 10px"
      >
        Add
      </Button>
    </div>
  );
}

function Button({
  children,
  backgroundColor,
  width = '70px',
  border,
  color,
  padding,
  onClick,
}) {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ backgroundColor, width, border, color, padding }}
    >
      {children}
    </button>
  );
}
function ShoppingList({ lists }) {
  return (
    <div>
      {lists.map((list) => (
        <List id={list.id} name={list.name} key={list.id} />
      ))}
    </div>
  );
}
function List({ name, id }) {
  return (
    <div className="list">
      <p>{name}</p>
      <button onClick={() => console.log(id, 'id')}>X</button>
    </div>
  );
}

export default App;
