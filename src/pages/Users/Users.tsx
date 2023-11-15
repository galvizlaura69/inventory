import TableGeneral from "../../components/commonts/Tables/TableGeneral";
import "./Users.css";

const Users = () => {

  const columnsUsers = [
    { field: 'name', headerName: 'Nombre', width: 250 },
    { field: 'document', headerName: 'Documento', width: 230 },
    { field: 'rol', headerName: 'Rol', width: 230 },
    { field: 'email', headerName: 'Correo electronico', width: 230 },
    { field: 'phone', headerName: 'Telefono', width: 230 },
  ];

  const rowsUsers = [
    { id: 1, name: 'Laura', document: '12345678', rol: 'Admin', email: "galviz@gmail.com", phone: '31455585 ' },
    { id: 2, name: 'Carlos', document: '87654321', rol: 'User', email: "galviz@gmail.com", phone: '31455585 ' },
    { id: 3, name: 'Ana', document: '13579246', rol: 'Admin', email: "galviz@gmail.com", phone: '31455585 ' },
    { id: 1, name: 'Laura', document: '12345678', rol: 'Admin', email: "galviz@gmail.com", phone: '31455585 ' },
    { id: 2, name: 'Carlos', document: '87654321', rol: 'User', email: "galviz@gmail.com", phone: '31455585 ' },
    { id: 3, name: 'Ana', document: '13579246', rol: 'Admin', email: "galviz@gmail.com", phone: '31455585 ' },
  ];

  const handleView = (params) => {
    console.log("Ver registro:", params.row);
  };

  const handleEdit = (params) => {
    console.log("Editar registro:", params.row);
  };

  const handleTrash = (params) => {
    console.log("Eliminar registro:", params.row);
  };

  return (
    <div className="p-10 flex flex-col">
      <div>
        <button className="button_table mb-5">
          Registrar usuario
        </button>
      </div>
      <div>
        <TableGeneral
          columns={columnsUsers}
          rows={rowsUsers}
          editRow
          trashRow
          handleEdit={handleEdit}
          handleView={handleView}
          handleTrash={handleTrash} />
      </div>

    </div>
  );
};

export default Users;