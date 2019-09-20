import React from 'react';
import style from "../../routes/login/index.css"
class Header extends React.Component {
  render(){
    return (
      <div>
        <div className={style.header}>{this.props.title}</div>
      </div>
    );
  }
  
};


export default Header;