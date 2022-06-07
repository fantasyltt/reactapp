import Header from './Header';
import List from './List';
import Footer from './Footer';
import './App.less';

const App = (props) =>{
  return (
    <div className="App">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
