import TableGeneral from "../../components/commonts/Tables/TableGeneral";

const ClientsJur = () => {


  const columnsClientsJur= [
    { field: 'name', headerName: 'Nombre', width: 250 },
    { field: 'document', headerName: 'Documento', width: 230 },
    { field: 'rol', headerName: 'Role', width: 230 },
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
          rows=""
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