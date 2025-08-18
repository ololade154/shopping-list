const lists = [
  {
    id: 1,
    name: 'Bread',
  },
  {
    id: 2,
    name: 'Sugar',
  },
  {
    id: 3,
    name: 'Beans',
  },
];
function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}
function Container() {
  return (
    <div className="shopping-list">
      <Header />
      <Content />
      <ShoppingList />
    </div>
  );
}
function Header() {
  return <h1 className="header">Shopping List</h1>;
}
function Content() {
  return (
    <div className="content">
      <InputField placeholder="Title..." />
      <InputField width="40px" placeholder="14" />
      <Button
        backgroundColor="transparent"
        border=" 1px solid #FFD700"
        color="#FFD700"
        padding="5px 4px"
      >
        Add
      </Button>
    </div>
  );
}
function InputField({ placeholder, width = '190px' }) {
  return (
    <div>
      <input
        className="input-field"
        placeholder={placeholder}
        type="text"
        style={{ width }}
      ></input>
    </div>
  );
}
function Button({
  children,
  backgroundColor,
  width = '50px',
  border,
  color,
  padding,
}) {
  return (
    <button
      className="button"
      style={{ backgroundColor, width, border, color, padding }}
    >
      {children}
    </button>
  );
}
function ShoppingList() {
  return (
    <ul>
      {lists.map((list) => (
        <List name={list.name} key={list.id} />
      ))}
    </ul>
  );
}
function List({ name }) {
  return <li className="list">{name}</li>;
}

export default App;
