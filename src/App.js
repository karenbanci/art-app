import "./App.css";
import styled from "styled-components";
import Header from "./Header";

function App() {
  const App = styled.div`
    text-align: center;
    background-color: white;
  `;

  return (
    <App>
      <Header />
    </App>
  );
}

export default App;
