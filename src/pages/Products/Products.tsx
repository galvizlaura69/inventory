import TableGeneral from "../../components/commonts/Tables/TableGeneral";
const Products = () => {

  const columnsUsers = [
    { field: 'name', headerName: 'Nombre Producto', width: 250 },
    { field: 'cantProduct', headerName: 'Cantidad Producto', width: 230 },
    { field: 'price', headerName: 'Precio unidad', width: 230 },
    { field: 'proveedor', headerName: 'Proveedor', width: 230 },
    { field: 'categorie', headerName: 'Categoria', width: 230 },
  ];

  const rowsUsers = [
    { id: 1, name: 'Producto A', cantProduct: 10, price: 100, proveedor: 'Proveedor X', categorie: 'Categoria 1' },
    { id: 2, name: 'Producto B', cantProduct: 20, price: 150, proveedor: 'Proveedor Y', categorie: 'Categoria 2' },
    { id: 3, name: 'Producto C', cantProduct: 15, price: 120, proveedor: 'Proveedor Z', categorie: 'Categoria 1' },
    { id: 4, name: 'Producto D', cantProduct: 12, price: 130, proveedor: 'Proveedor X', categorie: 'Categoria 2' },
    { id: 5, name: 'Producto A', cantProduct: 10, price: 100, proveedor: 'Proveedor X', categorie: 'Categoria 1' },
    { id: 6, name: 'Producto B', cantProduct: 20, price: 150, proveedor: 'Proveedor Y', categorie: 'Categoria 2' },
    { id: 7, name: 'Producto C', cantProduct: 15, price: 120, proveedor: 'Proveedor Z', categorie: 'Categoria 1' },
    { id: 8, name: 'Producto D', cantProduct: 12, price: 130, proveedor: 'Proveedor X', categorie: 'Categoria 2' },
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
          Registrar producto
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

export default Products;