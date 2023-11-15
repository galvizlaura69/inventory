import TableGeneral from "../../components/commonts/Tables/TableGeneral";

const ClientsNat = () => {

  const columnsClientsNat = [
    { field: 'name', headerName: 'Nombre', width: 200 },
    { field: 'lastname', headerName: 'Apellido', width: 230 },
    { field: 'document', headerName: 'Documento', width: 230 },
    { field: 'phone', headerName: 'Celular', width: 230 },
    { field: 'email', headerName: 'Correo electronico', width: 230 },
  ];

  const rowsClientsNat = [
    { id: 1, name: 'Laura', lastname: 'Gomez', document: '12345678', phone: '555-1234', email: 'laura@example.com' },
    { id: 2, name: 'Carlos', lastname: 'Perez', document: '87654321', phone: '555-5678', email: 'carlos@example.com' },
    { id: 3, name: 'Laura', lastname: 'Gomez', document: '12345678', phone: '555-1234', email: 'laura@example.com' },
    { id: 4, name: 'Carlos', lastname: 'Perez', document: '87654321', phone: '555-5678', email: 'carlos@example.com' },
    { id: 5, name: 'Laura', lastname: 'Gomez', document: '12345678', phone: '555-1234', email: 'laura@example.com' },
    { id: 6, name: 'Carlos', lastname: 'Perez', document: '87654321', phone: '555-5678', email: 'carlos@example.com' },
    // ... más filas ...
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
          Registrar Cliente Natural
        </button>
      </div>
      <div>
        <TableGeneral
          columns={columnsClientsNat}
          rows={rowsClientsNat}
          editRow
          trashRow
          handleEdit={handleEdit}
          handleView={handleView}
          handleTrash={handleTrash} />
      </div>

    </div>
  );
};

export default ClientsNat;