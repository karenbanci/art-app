import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <div className="header-top">
            <img className="logo" src="./stone-spa-flower.svg" alt="Artists" />
            <button type="button" className="button-dark">
              Get in Touch
            </button>
          </div>
          <h1 className="header-text">
            Unleash Your Creativity at the Arts Conference for Artists
          </h1>
          <div className="header-bottom">
            <button type="button" className="button-dark">
              Check our Portfolio
            </button>

            <button type="button" className="button-light">
              Show our showreel
            </button>
          </div>
        </div>
        <div className="header-images">
          <img className="paint-image" src="./paint.jpeg" alt="Artists" />
        </div>
      </header>
    </div>
  );
}

export default App;
