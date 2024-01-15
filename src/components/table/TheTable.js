import React, { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import axios from 'axios';

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 100 },
  { id: 'lastName', label: 'Last Name', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 200 },
  { id: 'position', label: 'Position', minWidth: 150 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'reported', label: 'Reported', minWidth: 100 },
];

const ResponsiveTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        let modifiedData = response.data.map(x=> (
            {
                firstName: x.name.split(' ')[0],
                lastName: x.name.split(' ')[1],
                email: x.email,
                position: x.address.city,
                status: 'Done',
                reported: new Date().toDateString()   
            }
        ))
        setData(modifiedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setSelectedRow(null); 
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setSelectedRow(null);
  };

  const handleRowClick = (row) => {
    setSelectedRow(selectedRow === row ? null : row);
  };

  const renderDetailsRow = (row) => {
    return selectedRow === row ? (
      <TableRow key={row.id}>
        <TableCell colSpan={6}>
          <Accordion style={{backgroundColor: "var(--color-background2)"}}>
            {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>Details</Typography>
            </AccordionSummary> */}
            <AccordionDetails>
              <Typography>
                Campaign Created Time: {row.campaignCreatedTime}<br />
                Email Sent: {row.emailSent}<br />
                Email Opened: {row.emailOpened}<br />
                Clicked Link: {row.clickedLink}<br />
                Submitted Data: {row.submittedData}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </TableCell>
      </TableRow>
    ) : null;
  };

//   const renderDetailsRow = (row) => {
//     return (
//       <TableRow key={row.id}>
//         <TableCell colSpan={6}>
//           <Accordion style={{backgroundColor: "var(--color-background2)"}}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//               <Typography>Details</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 Campaign Created Time: {row.campaignCreatedTime}<br />
//                 Email Sent: {row.emailSent}<br />
//                 Email Opened: {row.emailOpened}<br />
//                 Clicked Link: {row.clickedLink}<br />
//                 Submitted Data: {row.submittedData}
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </TableCell>
//       </TableRow>
//     );
//   };

  return (
    <Paper style={{borderRadius: 'var(--card-border-radius)', boxShadow: 'var(--box-shadow)'}}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TableContainer style={{ maxHeight: '51vh', overflowY: 'auto', overflowX: 'auto', borderRadius: 'var(--card-border-radius)' }}> 
            <Table stickyHeader>
              <TableHead style={{ borderBottom: '4px solid var(--color-dark)'}}>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} style={{ minWidth: column.minWidth, fontWeight: 600 }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <React.Fragment key={row.id}>
                  <TableRow onClick={() => handleRowClick(row)} sx={{ cursor: 'pointer' , '&:hover': { backgroundColor: 'var(--color-light)' } }}>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{row[column.id]}</TableCell>
                    ))}
                  </TableRow>
                  {renderDetailsRow(row)}
                </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Paper>
  );
};

export default ResponsiveTable;