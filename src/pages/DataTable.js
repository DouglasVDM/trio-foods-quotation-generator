import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: '', headerName: 'Product Name', },
  { field: '', headerName: 'Price', width: 300 },
  { field: '', headerName: 'Pack Size', width: 600 },
  { field: '', headerName: '', },
]

function DataTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("")
      .then((data) => data.json())
    .then((data)=> setTableData(data))
  }, [])
  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable

