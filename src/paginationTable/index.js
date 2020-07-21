import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

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
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData([{
        first_name: 'riyaz',
        last_name: 'ahmed',
        email: 'random@gmail.com'
      }]);
      setTotalRows(20)
    }, 1000);
  }, []);


  const handlePageChange = page => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setData([]);
    }, 1000);
  }

  const handlePerRowsChange = (perPage, page) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setData([]);
    }, 1000);
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
