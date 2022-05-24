import './App.css';
import Header from './components/header';
import Ingredients from './components/ingredients';
import Instructions from './components/instructions';
import CoockingDuration from './components/cooking-duraion';
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
