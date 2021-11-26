import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { buttonUnstyledClasses } from "@mui/core";
import Checkboxes from "./fields/checkBox";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { styled, createStyles } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../redux/action";
import { Button } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from "@mui/material/Box";


const styles = makeStyles((theme) =>
  createStyles({
    root: {},
    mainContainer: {
      "& th": {
        padding: "4px",
      color: theme.palette.text.secondary,

      },
      "& td": {
        padding: "4px",
      },
      color: theme.palette.text.secondary,

      //  "& td:nth-child(even)": {
      //   background: "blue"
      // }
    },
  })
);

export default function TableData() {
  const classes = styles();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.text.secondary,
      // color: "#121212",
      fontWeight: "bold",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
    // [`& .${MuiTableCell-root}`]:{
    //   padding:"0px !important",
    // }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // margin: theme.spacing(),
  }));
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div >
      {/* <div className={buttonUnstyledClasses.root}></div> */}
      <Box>
        &nbsp; &nbsp;
        0 Selected
                <Button
                  sx={{
                    // fontWeight: "bold",
                    fontSize: 10,
                    // borderColor: 'grey.500',
                    // color: "red",
                    // boxShadow: 1,
                    fontWeight: "bold",
                    margin: 1,
                    // color: theme.palette.text.secondary,
                    p: 1, 
                    border: '1px solid #e6e7eb',
                    color: "inherit"
                  }}
                  // variant="outlined"
                >
                  Recieved
                </Button>
                <Button
                  sx={{
                    // fontWeight: "bold",
                    fontSize: 10,
                    fontWeight: "bold",
                    // borderColor: 'grey.500',
                    // boxShadow: 1,
                    margin: 1,
                    // color: 'black',
                    p: 1, border: '1px solid #e6e7eb',
                    color: "inherit"
                  }}
                  // variant="outlined"
                >
                  Print label
                </Button>
                <Button
                  sx={{
                    // fontWeight: "bold",
                    fontSize: 10,
                    // borderColor: 'grey.500',
                    // boxShadow: 1,
                    fontWeight: "bold",
                    margin: 1,
                    // color: 'black',
                    p: 1, border: '1px solid #e6e7eb',
                    color: "inherit"
                  }}
                  // variant="outlined"
                >
                  Delete
                </Button>
                <Button
                  sx={{
                    // fontWeight: "bold",
                    fontSize: 10,
                    // borderColor: 'grey.500',
                    // boxShadow: 1,
                    fontWeight: "bold",
                    margin: 1,
                    // color: 'black',
                    border: '1px solid #e6e7eb',
                    color: "inherit"
                  }}
                  // variant="outlined"
                >
                  Filter
                  <FilterListIcon
                  sx={{
                    fontSize: 16,
                    
                  }}
                   />
                </Button>
              </Box>
      <TableContainer component={Paper}>
        <Table
          sx={{ marginTop: 0, minWidth: 900 }}
          aria-label="customized table"
        >
          
             
          <TableHead>
            <TableRow sx={{ marginTop: 0, minWidth: 900 }}>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Username</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Street</StyledTableCell>
              <StyledTableCell align="left">Suite</StyledTableCell>
              <StyledTableCell align="left">City</StyledTableCell>
              <StyledTableCell align="left">Pincode</StyledTableCell>
              <StyledTableCell align="left">GeoLocation</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left">Website</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="td" scope="row">
                    <Checkboxes />
                  </StyledTableCell>
                  <StyledTableCell component="td" scope="row">
                    {user.id}
                  </StyledTableCell>
                  <StyledTableCell component="td" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell component="td" scope="row">
                    {user.username}
                  </StyledTableCell>
                  <StyledTableCell component="td" align="left">
                    {user.email}
                  </StyledTableCell>
                  <StyledTableCell component="td" align="left">
                    {user.address.street}
                    {console.log("ABCDE", user.address.street)}
                    {/* {`${user.address.street}, ${user.address.street}`} */}
                  </StyledTableCell>
                  <StyledTableCell component="td" align="left">
                    {user.address.suite}

                    {/* {`${user.address.suite}, ${user.address.suite}`} */}
                  </StyledTableCell>
                  <StyledTableCell component="td" align="left">
                    {user.address.city}

                    {/* {`${user.address.city}, ${user.address.city}`} */}
                  </StyledTableCell>
                  <StyledTableCell component="td" align="left">
                    {user.address.zipcode}
                  </StyledTableCell>

                  <StyledTableCell component="td" align="left">
                    {"lat =" +
                      user.address.geo.lat +
                      " " +
                      "lng =" +
                      user.address.geo.lng}
                  </StyledTableCell>

                  <StyledTableCell component="td" align="left">
                    {user.phone}
                  </StyledTableCell>
                  <StyledTableCell component="td" align="left">
                    {user.website}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
