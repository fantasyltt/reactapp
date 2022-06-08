import {useState} from 'react';
import './Header.less';
const nav=[
  {
    id:0,
    title:'作品集'
  },
  {
    id:1,
    title:'简历'
  }
]
const Header = (props) => {
  const [active,setTab]  = useState(0)
  function switchTab(index) {
    setTab(index)
    props.tabId(index)
  }
  return (
    <header className="App-header">
      <div className="headerBg">
         <img src={require("./assets/images/logo.png")} className="logo" alt="logo" />
        <div className="nav">
          <ul>
            {nav.map((item) => {
                return (
                    <li 
                    key={item.id}
                    className={item.id==active? "active" : ""}
                    onClick={switchTab.bind(this,item.id)}
                    >
                      {item.title}
                    </li>
                )
              })}
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
