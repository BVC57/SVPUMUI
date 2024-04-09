import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const sample = [
  ['Chocolate Cake', '+9898989898', 'Birthday Party', '15/05/2024', 'www.saksham.com'],
  ['Cheesecake', '+9898989898', 'Anniversary Celebration', '10/06/2024', 'www.saksham.com'],
  ['Strawberry Tart', '+9898989898', 'Family Gathering', '25/07/2024', 'www.saksham.com'],
  ['Lemon Meringue Pie', '+9898989898', 'Dinner Party', '08/08/2024', 'www.saksham.com'],
  ['Red Velvet Cupcake', '+9898989898', 'Office Farewell', '02/09/2024', 'www.saksham.com'],
  ['Tiramisu', '+9898989898', 'Friends Reunion', '18/10/2024', 'www.saksham.com'],
  ['Pecan Pie', '+9898989898', 'Thanksgiving Dinner', '24/11/2024', 'www.saksham.com'],
  ['Blueberry Cheesecake', '+9898989898', 'Housewarming Party', '05/12/2024', 'www.saksham.com'],
  ['Raspberry Macaron', '+9898989898', 'Baby Shower', '14/01/2025', 'www.saksham.com'],
  ['Key Lime Pie', '+9898989898', 'Casual Get-Together', '20/02/2025', 'www.saksham.com'],
  ['Banana Bread', '+9898989898', 'Brunch with Friends', '12/03/2025', 'www.saksham.com'],
  ['Chocolate Chip Cookies', '+9898989898', 'Kids Party', '29/04/2025', 'www.saksham.com'],
  ['Apple Crumble', '+9898989898', 'Family Dinner', '03/05/2025', 'www.saksham.com'],
  ['Lemon Drizzle Cake', '+9898989898', 'Afternoon Tea', '18/06/2025', 'www.saksham.com'],
  ['Pumpkin Pie', '+9898989898', 'Halloween Party', '31/10/2025', 'www.saksham.com'],
  ['Black Forest Gateau', '+9898989898', 'Engagement Celebration', '22/11/2025', 'www.saksham.com'],
  ['Carrot Cake', '+9898989898', 'Sunday Brunch', '07/12/2025', 'www.saksham.com'],
  ['Coconut Macaroons', '+9898989898', 'Poolside Gathering', '19/01/2026', 'www.saksham.com'],
  ['Peach Cobbler', '+9898989898', 'Summer BBQ', '28/02/2026', 'www.saksham.com'],
  ['Coffee Cake', '+9898989898', 'Morning Meeting', '11/03/2026', 'www.saksham.com'],
  ['Cherry Pie', '+9898989898', 'Picnic in the Park', '29/04/2026', 'www.saksham.com'],
  ['Almond Biscotti', '+9898989898', 'Book Club Gathering', '05/06/2026', 'www.saksham.com'],
  ['Lavender Shortbread', '+9898989898', 'Bridal Shower', '14/07/2026', 'www.saksham.com'],
  ['Mango Sorbet', '+9898989898', 'Summer Party', '30/08/2026', 'www.saksham.com'],
  ['Hazelnut Torte', '+9898989898', 'Graduation Celebration', '16/09/2026', 'www.saksham.com'],
  ['Pistachio Ice Cream', '+9898989898', 'Outdoor BBQ', '22/10/2026', 'www.saksham.com'],
  ['Raspberry Swirl Brownies', '+9898989898', 'Dessert Potluck', '07/12/2026', 'www.saksham.com'],
  ['Vanilla Bean Panna Cotta', '+9898989898', 'Holiday Dinner', '23/12/2026', 'www.saksham.com'],
  ['Oreo Cheesecake', '+9898989898', 'Game Night', '01/02/2027', 'www.saksham.com'],
  ['Mint Chocolate Chip Cookies', '+9898989898', 'Movie Marathon', '14/03/2027', 'www.saksham.com']
  ];

const rowsPerPage = 15;

const columns = [
  { width: 200, label: 'Name', dataKey: 'Name' },
  { width: 120, label: 'PhoneNo', dataKey: 'PhoneNo' },
  { width: 120, label: 'Purpose', dataKey: 'Purpose' },
  { width: 120, label: 'Date', dataKey: 'Date' },
  { width: 150, label: 'View', dataKey: 'View' },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#D0D5DD',
  border: '1px solid gray',
  padding: '8px',
  color: 'black',
  fontWeight: 700,
  fontSize: '12px',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  '&:nth-of-type(even)': {
    backgroundColor: 'white',
  },
  '& > td': {
    border: '1px solid lightgrey',
    padding: '10px',
  },
}));

export default function MyTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset page to 1 when search query changes
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const filteredRows = sample.filter(row =>
    row[0].toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalRows = filteredRows.length;
  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const displayedRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <Paper style={{ height: 400, width: '100%', marginTop: '3%' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px',height:"40px",float:"right",border:"1px solid gray", borderRadius:"10px" }}>
        <SearchIcon />
        <InputBase
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginLeft: '8px', flex: 1 }}
        />
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell key={column.dataKey}>{column.label}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row, index) => (
              <StyledTableRow key={index}>
                {row.map((cell, idx) => (
                  <TableCell key={idx}>{cell}</TableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} style={{ alignItems: 'center', marginTop: '2%' }}>
        <Pagination
          count={Math.ceil(totalRows / rowsPerPage)}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChangePage}
          sx={{
            '& .Mui-selected': {
              backgroundColor: '#1976d2 !important',
              color: 'white',
              '&:hover': {
                backgroundColor: '#1976d2 !important',
              },
            },
            '& .MuiPaginationItem-root:hover': {
              cursor: 'pointer',
            },
          }}
        />
      </Stack>
    </Paper>
  );
}
