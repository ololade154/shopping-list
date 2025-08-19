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
  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="shopping-list">
      <Header />
      <Content setItems={setItems} />
      <ShoppingList lists={items} removeItem={removeItem} />
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
        style={{ width: '170px' }}
      />
      <input
        className="input-field"
        placeholder="14"
        value={id}
        onChange={(e) => setId(e.target.value)}
        type="text"
        style={{ width: '50px' }}
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
function ShoppingList({ lists, removeItem }) {
  return (
    <div>
      {lists.map((list) => (
        <List
          id={list.id}
          title={list.title}
          key={list.id}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
}
function List({
  title,
  id,
  removeItem,
  width = '20px',
  backgroundColor = '#FFD700',
  border = 'none',
  fontSize = '20px',
  fontWeight = '500',
  color = '#FFD700',
}) {
  return (
    <div className="list">
      <div className="list-left">
        <button
          className="button"
          style={{ width, backgroundColor, border, fontSize, fontWeight }}
        >
          {id}
        </button>
        <p>{title}</p>
      </div>
      <div className="list-right">
        <button
          onClick={() => removeItem(id)}
          className="button"
          style={{
            width,
            border,
            fontSize: '18px',
            fontWeight,
            color,
            backgroundColor: 'transparent',
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default App;
