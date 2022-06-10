import "./App.css";
import socket from "./socket";
import JoinBlock from "./component/joinBlock";

function App() {
  console.log(socket);
  return (
    <div className="App">
      <JoinBlock />
    </div>
  );
}

export default App;
