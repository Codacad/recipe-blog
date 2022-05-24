import './App.css';
import Header from './compnents/header';
import Ingredients from './compnents/ingredients';
import Instructions from './compnents/instructions';
import CoockingDuration from './compnents/cooking-duraion';
function App() {
  return (
    <div className="App">
        <Header />
        <div className="two-column-layout">
            <div className="main-compnents">
                <Ingredients />
                <Instructions />
            </div>
            <div className="side-component">
                <CoockingDuration />
            </div>
        </div>
    </div>
  );
}

export default App;
