// import logo from './logo.svg';
import HeaderComponent from "./component/HeaderComponent.js";
import ContentComponent from "./component/ContentComponent.js";
import { useState ,useRef} from "react";
import { members } from "./component/dbUsers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Modal from "./component/Modal.js";
import "./App.css";

function App() {
  const currentUser = useRef(members)
  const [users, setUsers] = useState(members);



  const HandleDelete = (id) => {
    const newuser = users.filter((user) => user.id !== id);
    setUsers(newuser);
    toast.success('Đã xóa Khỏi Danh Sách !')
  };
  const HandleAdd = (newUser) => {
    setUsers([...users, newUser]);   
    
  };
  const HandleEdit =(user) =>{
    // console.log(member)
    // toast.error('lỗi')
      // console.log(user)   

      const membersCoppy = [...users];
      // console.log(membersCoppy)
      // console.log(user.user.id)
      const objIndex = membersCoppy.findIndex((item) => item.id === user.id)
      membersCoppy[objIndex].id =user.id
      membersCoppy[objIndex].name =user.name
      membersCoppy[objIndex].address = user.address
      membersCoppy[objIndex].phone = user.phone
      membersCoppy[objIndex].year = user.year
      // console.log(objIndex)
      // console.log(membersCoppy[objIndex])
      // setUsers(membersCoppy)
      setUsers([...users],[membersCoppy[objIndex]])
      toast.success('Đã Update Thành Công!')

  };
  const HandleSearch = (searchName) =>{
    // const membersCoppy = [...users];
    
    const user = currentUser.current.filter((memberName) =>
      memberName.name === searchName ||
      memberName.id === Number(searchName) ||
      memberName.phone=== searchName ||
      memberName.address === searchName ||
      memberName.year === Number(searchName)

    )
    setUsers(user)
  }

  return (
    <div className="App">
      <HeaderComponent 
        members={users} 
        onAdd={HandleAdd} 
        HandleSearch ={HandleSearch}
        type={'add'}

      />
      <ContentComponent 
        members={users} 
        HandleDelete={HandleDelete} 
        HandleEdit ={HandleEdit}
        type={'edit'}
      />

      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
}

export default App;
