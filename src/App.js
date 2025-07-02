// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import AllMenu from './AllMenu';
import ProductFilter from './ProductFilter'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllMenu />
      <ProductFilter />
    </div>
  );
}

export default App;
