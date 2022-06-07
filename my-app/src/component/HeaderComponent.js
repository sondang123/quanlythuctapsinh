// import App from "./App";
import { useState } from "react";
import Modal from "./Modal";
function HeaderComponent(props) {
  const[searchName, setSearchName] = useState('')
  return (
    <div className="header">
      <div className="inputForm">
        <input placeholder="Tìm Kiếm Theo Tên"  onChange={(e) => setSearchName(e.target.value )}></input>
        <span onClick={()  =>{props.HandleSearch(searchName)}}><i className="fa-solid fa-magnifying-glass"></i></span>
      </div>
      <Modal {...props} />
    </div>
  );
}
export default HeaderComponent;
