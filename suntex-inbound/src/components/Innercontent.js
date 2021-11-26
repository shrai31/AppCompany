import { Breadcrumbs, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import PrimarySearchAppBar from "./fields/search";
import { MyApp } from "./header";
import InboundShipmentDetails from "./inboundShipmentDetails";
import TableData from "./Table";

function Innercontent() {
  return (
    <div style={{marginLeft: "56px",marginTop: "24px",}}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ boxShadow: 1}}>
          <Link underline="hover" color="inherit" href="/">
            Inbound Shipment
          </Link>
          <Typography>Inbound Shipment Details</Typography>
          <Typography sx={{ ml: 200 }}>
            <MyApp />
          </Typography>
        </Breadcrumbs>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
          <Box gridColumn="span 2" boxShadow="3" mr="10px">
            <InboundShipmentDetails />
          </Box>
          <Box gridColumn="span 10">
            <PrimarySearchAppBar />
            <Divider />
            <Divider />
            <Divider />

            <TableData />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Innercontent;
