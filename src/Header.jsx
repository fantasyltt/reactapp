import './Header.less';

const Header = (props) => {
  return (
    <header className="App-header">
      <div className="headerBg">
         <img src={require("./assets/images/logo.png")} className="logo" alt="logo" />
        <div className="nav">
          <ul>
            <li className='active'>作品集</li>
            <li>简历</li>
          </ul>
        </div>
        <div className="info">
          <span>LucasErickson</span>
          <img src={require("./assets/images/avatar.jpg")} alt="avatar" />
        </div>
      </div>
      <div className="banner">
      <img src={require("./assets/images/banner.jpg")} alt="avatar" />
      </div>
       
      </header>
  );
}

export default Header;
