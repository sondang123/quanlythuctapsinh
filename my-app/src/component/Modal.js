import React from "react";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
const Modal = ({ onAdd ,member,HandleEdit,type}) => {
  const [close, SetClose] = useState(false);
  const handleClose = () => {
    SetClose(true);
  };

  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
    year: "",
  });
  
  const HandlSubmit = () => {
      if(!user.name && !user.address && !user.phone && !user.year){
        // alert('Hãy Nhập Thông Tin Đầy Đủ')
        toast.error('Hãy Nhập Đầy Đủ Thông Tin !')
      }else{
        type==='add'? onAdd({...user,id:uuidv4()}) :  HandleEdit(user)
        setUser({
            name: "",
            address: "",
            phone: "",
            year: "",
            imgUrl:''
        });
        SetClose (false)
        toast.success('Đã Thêm Thành Công !')
      }

  };
  const addMember = (member) => {
    setUser(member)
   }
   const handelPreviewAvatar = (e) =>{
     const file = e.target.files[0]
     // console.log(file);
     // console.log(URL.createObjectURL(file))
     // const url =URL.createObjectURL(file.File)
     // console.log(url)
    //  setAvatar(URL.createObjectURL(file))
     // console.log(avatar)
     setUser({...user, imgUrl : URL.createObjectURL(file)})

    }
    useEffect(() => {
      return () =>{
      //  URL.revokeObjectURL(URL.createObjectURL())
     }
   },[user.imgUrl])

  return (
    <div>
     { type==='add' ? 

        <button className="addBtn" onClick={handleClose}>
          Thêm Mới
        </button>
      :

        <span className="update" onClick={() => {
              handleClose()
              addMember(member)
              }}>
              <i className="fa-solid fa-pen-to-square"></i>
        </span>
     }
      
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
          {type==='add' ?
            <h1 className="headerModal-title">Thêm Thành Viên</h1> :
            <h1 className="headerModal-title">NHẬP THÔNG TIN UPDATE</h1>
          }
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
            <label htmlFor="">Họ Và Tên</label>
            <input
              
     
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              type="text"
              placeholder="Nhập Họ Và Tên"
            />
             <label htmlFor="">Chọn avatar</label>
            <input
              // value={user.imgUrl}
              // onChange={(e) => setUser({ ...user, imgUrl: URL.createObjectURL(e.target.files) })}
              onChange={handelPreviewAvatar}
              type="file"
            />
            <label htmlFor="">Địa Chỉ</label>
            <input
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              type="text"
              placeholder="Nhập Địa Chỉ"
            />
            <label htmlFor="">Số Điện Thoại</label>
            <input
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              type="text"
              placeholder="Nhập Số Điện Thoại"
            />
            <label htmlFor="">Năm Sinh</label>
            <input
              value={user.year}
              onChange={(e) => setUser({ ...user, year: e.target.value })}
              type="text"
              placeholder="Nhập Năm Sinh"
            />
            {type==='add' ?
            <button className="submitModal" onClick={HandlSubmit}>
              Submit
            </button>
            :
            <button className="submitModal" onClick={HandlSubmit}>
              SAVE
            </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
