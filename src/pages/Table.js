import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';

const sample = [
  ['Frozen', +9898989898, "Study", "20/02/2024", "www.saksham.com"],
  ['cream',+9898989898, "Study", "20/02/2024", "www.saksham.com"],
  ['Eclair',+9898989898, "Study", "20/02/2024", "www.saksham.com"],
  ['Cupcake', +9898989898, "Study", "20/02/2024", "www.saksham.com"],
  ['Gingerbread', +9898989898, "Study", "20/02/2024", "www.saksham.com"],
];

function createData(id,Name, PhoneNo, Purpose, Date, View) {
  return {id,Name, PhoneNo, Purpose, Date, View };
}

const columns = [
  { width: 200, label: 'Name', dataKey: 'Name' },
  { width: 120, label: 'PhoneNo', dataKey: 'PhoneNo' },
  { width: 120, label: 'Purpose', dataKey: 'Purpose'},
  { width: 120, label: 'Date', dataKey: 'Date'},
  { width: 120, label: 'View', dataKey: 'View' },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref}/>
  )),
  Table: (props) => (
    <Table {...props} style={{ borderCollapse: 'collapse', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => (
    <TableRow {...props} style={{ border: '1px solid black' }} />
  ),
  TableCell: (props) => (
    <TableCell {...props} style={{ border: '1px solid black', padding: '8px' }} />
  ),
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} style={{ border: '1px solid black'}}/>
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width, backgroundColor: '#D0D5DD', border: '1px solid black', padding: '8px' }}
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
          style={{ border: '1px solid black', padding: '8px' }}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function MyTable() {
  return (
    <Paper style={{ height: 400, width: '100%',marginTop:"3%" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
