import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { getDataApi } from '../dataSource';

const columns = [
  {
    name: 'First Name',
    selector: 'first_name',
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: 'last_name',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
];

const PaginationTable = ({ }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {

    getDataApi(0, perPage, ({data, totalRow}) => {
      setData(data);
      setTotalRows(totalRow);
      setLoading(false)
    })
  }, []);


  const handlePageChange = page => {
    setLoading(true);
    setPage(page);

    getDataApi((page-1) *perPage, perPage, ({data}) => {
      setData(data);
      setLoading(false)
    })
  }

  const handlePerRowsChange = (perPage, page) => {
    setLoading(true);
    setPage(page);

    getDataApi((page-1)* perPage, perPage, ({data}) => {
      setData(data);
      setLoading(false)
    })
  }

  return (
    <DataTable
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
    />
  );
}

export default PaginationTable;
