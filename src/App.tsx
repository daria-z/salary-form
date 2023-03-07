import "./App.css";
import { Content } from "./componens/Content";
import { Clarification } from "./componens/Clarification";

function App() {
  return (
    <main className="App">
      <Content /> <Clarification withIncomeTax={true} salaryAmount={40000} />
    </main>
  );
}

export default App;

