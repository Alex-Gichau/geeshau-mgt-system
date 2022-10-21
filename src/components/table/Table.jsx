import React from 'react'
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table = () => {
  const rows = [{
    id:11231231,
    img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fbusinessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fbusinessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-image179728610&tbnid=-zGj0lEDzVXFtM&vet=12ahUKEwinvOv6-_H6AhUKLRoKHdlaAiQQMygCegUIARD3AQ..i&docid=95dfjlEjIdTZ7M&w=800&h=800&q=vector%20male&ved=2ahUKEwinvOv6-_H6AhUKLRoKHdlaAiQQMygCegUIARD3AQ",
    member:"John Allan",
    dob:"01 March, 2022",
    congregation:"Township",
    method:"Transfered",
    status:"Full Member",
  }, 
  //TODO #1
  {
    id:11231231,
    img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fbusinessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fbusinessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-image179728610&tbnid=-zGj0lEDzVXFtM&vet=12ahUKEwinvOv6-_H6AhUKLRoKHdlaAiQQMygCegUIARD3AQ..i&docid=95dfjlEjIdTZ7M&w=800&h=800&q=vector%20male&ved=2ahUKEwinvOv6-_H6AhUKLRoKHdlaAiQQMygCegUIARD3AQ",
    member:"John Allan",
    dob:"01 March, 2022",
    congregation:"Township",
    method:"Transfered",
    status:"Full Member",
  }, 
  {
    id:11231231,
    img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fbusinessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fbusinessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-image179728610&tbnid=-zGj0lEDzVXFtM&vet=12ahUKEwinvOv6-_H6AhUKLRoKHdlaAiQQMygCegUIARD3AQ..i&docid=95dfjlEjIdTZ7M&w=800&h=800&q=vector%20male&ved=2ahUKEwinvOv6-_H6AhUKLRoKHdlaAiQQMygCegUIARD3AQ",
    member:"John Allan",
    dob:"01 March, 2022",
    congregation:"Township",
    method:"Transfered",
    status:"Full Member",
  }, 
  {
    id:11231231,
    img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fbusinessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fbusinessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-image179728610&tbnid=-zGj0lEDzVXFtM&vet=12ahUKEwinvOv6-_H6AhUKLRoKHdlaAiQQMygCegUIARD3AQ..i&docid=95dfjlEjIdTZ7M&w=800&h=800&q=vector%20male&ved=2ahUKEwinvOv6-_H6AhUKLRoKHdlaAiQQMygCegUIARD3AQ",
    member:"John Allan",
    dob:"01 March, 2022",
    congregation:"Township",
    method:"Transfered",
    status:"Full Member",
  },
];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Member</TableCell>
            <TableCell className="tableCell">D.O.B</TableCell>
            <TableCell className="tableCell">Congregation</TableCell>
            <TableCell className="tableCell">Status</TableCell>
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
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Table 