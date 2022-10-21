import React from 'react'
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [{
    id: 11231231,
    img: "https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg",
    member: "John Allan",
    dob: "01 March, 2022",
    congregation: "Emmanuel",
    method: "Transferred",
    status: "Registration",
  },
  //TODO #1
  {
    id: 11231231,
    img: "https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg",
    member: "John Allan",
    dob: "01 March, 2022",
    congregation: "Township",
    method: "Transferred",
    status: "Registration",
  },
  {
    id: 11231231,
    img: "https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg",
    member: "John Allan",
    dob: "01 March, 2022",
    congregation: "Emmanuel",
    method: "Transferred",
    status: "Confirmed",
  },
  {
    id: 11231231,
    img: "https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg",
    member: "John Allan",
    dob: "01 March, 2022",
    congregation: "Township",
    method: "Transferred", //How they became a member
    status: "Confirmed",
  },
  {
    id: 11231231,
    img: "https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg",
    member: "John Allan",
    dob: "01 March, 2022",
    congregation: "Township",
    method: "Transferred", //How they became a member
    status: "Confirmed",
  },
  {
    id: 11231231,
    img: "https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg",
    member: "John Allan",
    dob: "01 March, 2022",
    congregation: "Township",
    method: "Transferred", //How they became a member
    status: "Registration",
  },
  {
    id: 11231231,
    img: "https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg",
    member: "John Allan",
    dob: "01 March, 2022",
    congregation: "Township",
    method: "Transferred", //How they became a member
    status: "Registration",
  },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Member</TableCell>
            <TableCell className="tableCell">D.O.B</TableCell>
            <TableCell className="tableCell">Congregation</TableCell>
            <TableCell className="tableCell">Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.member}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.dob}</TableCell>
              <TableCell className="tableCell">{row.congregation}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List 