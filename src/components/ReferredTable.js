import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('google.com', 3746, 752, 43, 19291),
  createData('facebook.com', 8126, 728, 32, 17638),
  createData('twitter.com', 8836, 694, 28, 16218),
  createData('Direct,email,IM', 2739, 539, 20, 12370),
  createData('linkedin.com', 2739, 539, 20, 12370),
  createData('instagram.com', 2739, 539, 20, 12370),
];

export default function ReferredTable() {
  return (
    <div>
    <h5 style={{textAlign:"start"}}>Referrer</h5>
    <TableContainer>
      <Table style={{textAlign:"start"}} sx={{ minWidth: 650 }} size="medium">
        <TableHead style={{backgroundColor:"#F5F6FA",color:"#B7BAC5"}}>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell align="left">Views</TableCell>
            <TableCell align="left">Sales</TableCell>
            <TableCell align="left">Conversion</TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs+'%'}</TableCell>
              <TableCell align="left">{'$'+row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer><br/>
    <div style={{color:"#90BBFF",textAlign:"start",marginLeft:"16px"}}>Show More</div>
    </div>
  );
}
