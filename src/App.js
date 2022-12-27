import Card from "./Components/Card";
import Header from "./Components/Header";
import data from "./db"

function App() {
  const cards = data;
  return (
    <div className="App">
      <Header />
      {cards.map(card => {
        return <Card {...card}/>
      })}
    </div>
  );
}

export default App;
