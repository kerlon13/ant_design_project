
import './App.css';
import NavBar from './components/UI/NavBar';
import OrderCard from './components/UI/OrderCard';
import OrderTrackCard from './components/UI/OrderTrackCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <OrderCard />
      <OrderTrackCard />
    </div>
  );
}

export default App;
