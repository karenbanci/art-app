import "./App.scss";
import styled from "styled-components";
import Header from "./Header";
import Artworks from "./Artworks";

function App() {
  const App = styled.div`
    text-align: center;
    background-color: white;
  `;

  return (
    <App>
      <Header />
      <Artworks />
    </App>
  );
}

export default App;
