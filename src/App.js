
import './App.css';
import Cart from './Components/Cart/Cart';
import Categories from './Components/Filter/Categories';
import Swimsuits from './Components/Swimsuits/Swimsuits';


function App() {
  return (
    <div className="App">
      <div className='category-cart'>
    <Categories/>
    <Cart/>
    </div>
    <Swimsuits/>
    </div>
  );
}

export default App;
