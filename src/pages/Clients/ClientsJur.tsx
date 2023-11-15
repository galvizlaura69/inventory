import TableGeneral from "../../components/commonts/Tables/TableGeneral";

const ClientsJur = () => {


  const columnsClientsJur= [
    { field: 'name', headerName: 'Nombre Empresa', width: 200 },
    { field: 'nameRepresent', headerName: 'Representante', width: 200 },
    { field: 'document', headerName: 'Nit empresa', width: 230 },
    { field: 'phone', headerName: 'Celular', width: 230 },
    { field: 'email', headerName: 'Correo electronico', width: 230 },
  ];

  const rowsClientsJur = [
    { id: 1, name: 'Empresa A', nameRepresent: 'Juan Perez', document: '123456789', phone: '555-1234', email: 'empresaA@example.com' },
    { id: 2, name: 'Empresa B', nameRepresent: 'Maria Lopez', document: '987654321', phone: '555-5678', email: 'empresaB@example.com' },
    { id: 3, name: 'Empresa C', nameRepresent: 'Maria Lopez', document: '987654321', phone: '555-5678', email: 'empresaB@example.com' },
    { id: 4, name: 'Empresa D', nameRepresent: 'Maria Lopez', document: '987654321', phone: '555-5678', email: 'empresaB@example.com' },
    { id: 5, name: 'Empresa E', nameRepresent: 'Maria Lopez', document: '987654321', phone: '555-5678', email: 'empresaB@example.com' },
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
          Registrar Cliente Juridico
        </button>
      </div>
      <div>
        <TableGeneral
          columns={columnsClientsJur}
          rows={rowsClientsJur}
          editRow
          trashRow
          handleEdit={handleEdit}
          handleView={handleView}
          handleTrash={handleTrash} />
      </div>

    </div>
  );
};

export default ClientsJur;