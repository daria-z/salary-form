import "./App.css";
import { Content } from "./componens/Content";
import { Clarification } from "./componens/Clarification";

function App() {
  return (
    <main className="container-sm">
      <div className="col-md-4">
        <Content />
      </div>
      <div className="col-md-7">
        <Clarification withIncomeTax={true} salaryAmount={40000} />
      </div>
    </main>
  );
}

export default App;


