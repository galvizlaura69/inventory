import TableGeneral from "../../components/commonts/Tables/TableGeneral";

const ClientsNat = () => {

  const columnsClientsNat = [
    { field: 'name', headerName: 'Nombre', width: 250 },
    { field: 'document', headerName: 'Documento', width: 230 },
    { field: 'rol', headerName: 'Rol', width: 230 },
    { field: 'correo', headerName: 'Correo electronico', width: 230 },
  ];

  const rowsClientsNat = [
    { id: 1, name: 'Laura', document: '12345678', rol: 'Admin' },
    { id: 2, name: 'Carlos', document: '87654321', rol: 'User' },
    { id: 3, name: 'Ana', document: '13579246', rol: 'Admin' },
    { id: 1, name: 'Laura', document: '12345678', rol: 'Admin' },
    { id: 2, name: 'Carlos', document: '87654321', rol: 'User' },
    { id: 3, name: 'Ana', document: '13579246', rol: 'Admin' },
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