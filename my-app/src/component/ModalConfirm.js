import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
 const ModalConfirm =({HandleDelete,member}) =>{
    const [close, SetClose] = useState(false);
    const handleClose = () => {
      SetClose(true);
    };

   const HandleConfirm = () =>{
       HandleDelete(member.id);
       SetClose(false);
   }
    
  
    return (
      <div>
      
        {/* <button className="addBtn" onClick={handleClose}>
          Thêm Mới
        </button> */}
        <span className="delete" onClick={handleClose}>
            <i className="fa-solid fa-trash-can"></i>
        </span>
        
        <div
          className="modal"
          style={
            close
              ? { visibility: "visible", opacity: 1 }
              : { visibility: "hidden", opacity: 0 }
          }
        >
          <div className="formtModal">
            <div className="headerModal">
              <h1 className="headerModal-title">Xác Nhận Xóa Thành Viên !</h1>
              <span
                className="headerModal-close"
                onClick={() => {
                  SetClose(false);
                }}
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </span>
            </div>
            <div className="contentModal">
              {/* <button className="submitModal" onClick={() => HandleDelete(member.id)}> */}
              <button className="submitModal" onClick={() =>HandleConfirm(member.id)}>
                xác nhận
              </button>
              <button className="submitModal" onClick={()=>SetClose(false)}>
                cancer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
 }



export default ModalConfirm