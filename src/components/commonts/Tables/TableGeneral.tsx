import { DataGrid, esES } from '@mui/x-data-grid';

const TableGeneral = ({ columns, rows, handleEdit, handleView, handleTrash, editRow, trashRow }) => {

  const updatedColumns = [
    ...columns,
    {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      renderCell: (params) => (
        <div>
          <button onClick={() => handleView(params)}>
            Ver
          </button>
          {editRow &&
            <button onClick={() => handleEdit(params)}>
              Editar
            </button>
          }
          {trashRow &&
            <button onClick={() => handleTrash(params)}>
              Borrar
            </button>
          }
        </div>
      ),
    }
  ];

  return (
    <div style={{ height: 380, width: '100%' }}>
      <DataGrid
        columns={updatedColumns}
        rows={rows}
        autoHeight={false}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5]}
      />
    </div>
  );
};

export default TableGeneral;