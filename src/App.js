import logo from "./logo.svg";
import "./App.css";
import {HelmetProvider} from "react-helmet-async";
import Landing from "./pages/Landing";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Landing />
      </div>
    </HelmetProvider>
  );
}

export default App;
