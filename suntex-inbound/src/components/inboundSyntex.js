import React from "react";
import Box from "@mui/material/Box";
import { Header } from "./header";

function InboundSyntex() {
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
        <Box sx={{ mt: 6 }} gridColumn="span 12">
          <Header />
        </Box>
      </Box>
    </>
  );
}

export default InboundSyntex;
