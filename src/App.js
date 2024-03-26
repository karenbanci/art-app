import "./App.scss";
import styled from "styled-components";
import Header from "./Header";
import Body from "./Body";

function App() {
  const App = styled.div`
    text-align: center;
    background-color: white;
  `;

  return (
    <App>
      <Header />
      <Body />
    </App>
  );
}

export default App;
