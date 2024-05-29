import ProductList from "./component/ProductList";


function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">My Shop</h1>
      </header>
      <main className="p-4">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
