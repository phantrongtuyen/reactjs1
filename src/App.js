import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainBody from './MainBody';

// function App(){

// }
function App() {
  return (
    <div className="App">
      <Header 
      name='tuyen'
      age={14}
      />
      <MainBody/>
        
    </div>
  );
}

export default App;
