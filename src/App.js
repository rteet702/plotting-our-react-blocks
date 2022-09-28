import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Subcontent from "./components/Subcontent"
import Advertisement from "./components/Advertisement"


function App() {
  return (
    <div className="App">
      <Header />
      <div className="BottomPanel">
        <Navigation />
        <Main>
          <div className="SubcontentContainer">
            <Subcontent />
            <Subcontent />
            <Subcontent />
          </div>
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
