import ContentTable from "./ContentTableComponent";

function ContentComponent(props) {

    return (
      <div className="content">
        <table>
          <caption align="TOP">DANH SÁCH THỰC TẬP SINH LIFE SUB</caption>
          <tbody>
  
            <tr className="data">
              <th>ID</th>
              <th>Username</th>
              <th>Địa Chỉ</th>
              <th>Số Điện Thoại</th>
              <th>Ngày Sinh</th>
              <th colSpan="2">Action</th>
            </tr>
            <ContentTable
             {...props}
             />
          </tbody>
        </table>
         
      </div>

    );

}





export default ContentComponent;

