import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="nav">
          <ul>
            <li>作品集</li>
            <li>简历</li>
          </ul>
        </div>
        <div className="info">
          <span>Lucas Erickson</span>
          <img src={logo} alt="avata" />
        </div>
      </header>
  );
}

export default Header;
