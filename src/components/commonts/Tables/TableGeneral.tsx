import { DataGrid, esES } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const TableGeneral = ({ columns, rows, handleEdit, handleView, handleTrash, editRow, trashRow }) => {

  const updatedColumns = [
    ...columns,
    {
      field: "actions",
      headerName: "Acciones",
      renderCell: (params) => (
        <div className='items-center'>
          <button className='mr-2' onClick={() => handleView(params)}>
            <FontAwesomeIcon icon={faEye} className="w-4 h-4 mr-2" />
          </button>
          {editRow &&
            <button className='mr-2' onClick={() => handleEdit(params)}>
              <FontAwesomeIcon icon={faPencil} className="w-4 h-4 mr-2" />
            </button>
          }
          {trashRow &&
            <button onClick={() => handleTrash(params)}>
              <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
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