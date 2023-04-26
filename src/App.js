import Spinner from "./components/Spinner";
import "./App.css";
import Header from "./components/Header";

function App() {
  const rewards = ["Charan, walk us through your day", "Drinks", "Donny tells us a story", "R&D Friday", "PIZZA PARTY!", "Just more work", "SPIN AGAIN!"];
  return (
    <div className="App">
      <Header />
      <Spinner items={rewards} />
    </div>
  );
}

export default App;
