import "./App.scss";
import styled from "styled-components";
import Header from "./Header";
import Artworks from "./Artworks";
import Blog from "./Blog";

function App() {
  const App = styled.div`
    text-align: center;
    background-color: white;
  `;

  return (
    <App>
      <Header />
      <Artworks />
      <Blog />
    </App>
  );
}

export default App;
