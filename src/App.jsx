import {useState} from 'react';
import Header from './Header';
import List from './List';
import Resume from './Resume';
import Footer from './Footer';
import './App.less';


const App = (props) =>{
  const [show,showId]  = useState(0)
  function getTabId(even) {
    showId(even)
  }
  return (
    <div className="App">
      <Header tabId={getTabId} />
      <List show={show} />
      <Resume show={show} />
      <Footer  />
    </div>
  );
}

export default App;
