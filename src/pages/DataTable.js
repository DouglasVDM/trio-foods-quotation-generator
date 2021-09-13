import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: '', headerName: '' },
  { field: '', headerName: '' },
  { field: '', headerName: '' },
  { field: '', headerName: '' },
]

function DataTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("")
      .then((data) => data.json())
    .then((data)=> console.log(data))
  }, [])
  return (
    <div>
      <h1>Data Table</h1>      
    </div>
  )
}

export default DataTable

