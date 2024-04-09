import React, { useState } from 'react';
import { styled, alpha } from "@mui/material/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import InputBase from "@mui/material/InputBase";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from "@mui/icons-material/Search";
import { TableVirtuoso } from 'react-virtuoso';
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

// Create static data rows
const staticRows = Array.from({ length: 30 }, (_, index) => {
  const staticData = sample[index % sample.length]; // Cycle through sample data
  return {
    id: index,
    Name: staticData[0],
    PhoneNo: staticData[1],
    Purpose: staticData[2],
    Date: staticData[3],
    View: staticData[4]
  };
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref}/>
  )),
  Table: (props) => (
    <Table {...props} style={{ borderCollapse: 'collapse', tableLayout: 'fixed' }}  />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => (
    <TableRow {...props} style={{ border: '1px solid black' }} />
  ),
  TableCell: (props) => (
    <TableCell {...props} style={{ padding: '10px' }} />
  ),
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} style={{ }}/>
  )),
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid gray",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{
            width: column.width,
            backgroundColor: '#D0D5DD',
            border: '1px solid gray',
            padding: '8px',
            color: 'black',
            fontWeight: 700,
            fontSize: '12px',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
          style={{ border: '1px solid gray', backgroundColor: '#D0D5DD', padding: '8px' }}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

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

  // Filter and slice rows based on search query and pagination
  const filteredRows = staticRows.filter(row =>
    row.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalRows = filteredRows.length;
  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const displayedRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <Paper style={{ height: 400, width: '100%', marginTop: '3%' }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Search>
      <TableVirtuoso
        data={displayedRows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
      <Stack spacing={2} style={{ alignItems: "center", marginTop: "2%" }}>
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
