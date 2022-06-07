
import ModalConfirm from "./ModalConfirm.js";
import Modal from "./Modal.js";

function ContentTable({ members, HandleDelete,HandleEdit}) {
  if(members.length === 0){
    return (
      <tr>
        <td colSpan={6}>
          <h1>Chưa Có Thành Viên Nào !</h1>
        </td>
      </tr>
    )
  }
  return members.map((member, index) => {
    return (
      <tr key={index} className="data">
        <td className="ID">{index}</td>
        <td>{member.name}</td>
        <td>{member.address}</td>
        <td>{member.phone}</td>
        <td>{member.year}</td>
        <td>
          {/* <span className="delete" onClick={() => HandleDelete(member.id)}>
            <i className="fa-solid fa-trash-can"></i>
          </span> */}
          <ModalConfirm 
            HandleDelete={HandleDelete}
            member = {member}
          />
        </td>
        <td>
          {/* <ModalEdit
            HandleEdit = {HandleEdit}
            member = {member}
            
          /> */}
          <Modal 
            HandleEdit = {HandleEdit}
            member = {member}
          />
        </td>
      </tr>
      
    );
  });
}

export default ContentTable;
