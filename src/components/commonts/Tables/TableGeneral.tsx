import { DataGrid, esES } from '@mui/x-data-grid';

const TableGeneral = ({ columns, rows, handleEdit, handleView, handleTrash, editRow, trashRow }) => {

  const updatedColumns = [
    ...columns,
    {
      field: "actions",
      headerName: "Acciones",
      renderCell: (params) => (
        <div className='items-center'>
          <button className='mr-2' onClick={() => handleView(params)}>
            V
          </button>
          {editRow &&
            <button className='mr-2' onClick={() => handleEdit(params)}>
              E
            </button>
          }
          {trashRow &&
            <button onClick={() => handleTrash(params)}>
              B
            </button>
          }
        </div>
      ),
    }
  ];

  return (
    <div>
      <DataGrid
        columns={updatedColumns}
        rows={rows}
        autoHeight={false}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
          },
        }}
        pageSizeOptions={[6]}
      />
    </div>
  );
};

export default TableGeneral;