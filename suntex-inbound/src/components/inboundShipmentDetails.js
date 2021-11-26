import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Typography, Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  //   fontsize: '22px',
  // color: theme.palette.text.secondary,
}));

export default function InboundShipmentDetails() {
  // const month = new Array();
  // month[0] = "Jan";
  // month[1] = "Feb";
  // month[2] = "Mar";
  // month[3] = "Apr";
  // month[4] = "May";
  // month[5] = "June";
  // month[6] = "July";
  // month[7] = "Aug";
  // month[8] = "Sept";
  // month[9] = "Oct";
  // month[10] = "Nov";
  // month[11] = "Dec";

  var months = {'01':'Jan', '02':'Feb','03':'Mar', '04':'Apr','05':'May', '06':'Jun','07':'Jul', '08':'Aug','09':'Sept', '10':'Oct' ,'11':'Nov', '12':'Dec'};

  var today = new Date(),
    currentDateTime =
      today.getFullYear() +
      "-" +
      months[today.getMonth()] +
      "-" +
      today.getDate();

  // const currentDateTime = Date().toLocaleString();
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box  gridColumn="span 12">
          <Item sx={{ boxShadow:"0", fontWeight: "bold", m: 1 }}>
            Inbound Shipment Details
            <Stack direction="row">
              <Button sx={{ fontWeight: "bold", mt: 1 }} variant="outlined">
                <EditOutlinedIcon sx={{ mr: 1 }} />
                Edit
              </Button>
            </Stack>
          </Item>

          <Divider />

          <Item sx={{ boxShadow:"0" ,m: 1 }}>
            <Typography  sx={{ fontSize: 12, fontWeight: "bold"}}>
              Packages: 30
              <Button
                sx={{
                  borderRadius: 16,
                  alignItems: "right",
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                  ml: 11,
                  fontSize: 10
                }}
                variant="outlined"
              >
                Delayed
              </Button>
              Received : 0
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {currentDateTime}
            </Typography>
          </Item>

          <Divider />

          <Item sx={{ m: 1, fontSize: 10, fontWeight: "bold", boxShadow: "0"}}>
              <Typography sx={{fontSize: 10}}>
                  Warehouse *
              </Typography>
              Warehouse 01 

              <Typography sx={{fontSize: 10, mt:1}}> 
                  Shipment No. *
              </Typography>

              DSF23452552
              <Typography sx={{fontSize: 10, mt:1}}>
                  Ship Mode *
              </Typography>
              Air


              <Typography sx={{fontSize: 10, mt:1}}>
                  Port of Load *
              </Typography>
              KHPNH

              <Typography sx={{fontSize: 10, mt:1}}>
                 Estimated Time of Delivery at Port of Load
              </Typography>
              {currentDateTime}


              <Typography sx={{fontSize: 10, mt:1}}>
              Estimated Time of Arrival at Port of Discharge
              </Typography>
              {currentDateTime}

              <Typography sx={{fontSize: 10, mt:1}}>
              Estimated Time of Arrival at Factory
              </Typography>
              {currentDateTime}

              <Typography sx={{fontSize: 10, mt:1}}>
              Estimated Time of Arrival at Factory
              </Typography>
                 -

              <Typography sx={{fontSize: 10, mt:1}}>
              Bill of lading/ Airway Bill *
              </Typography>
              13323471149

              <Typography sx={{fontSize: 10, mt:1}}>
              Vessel / Voyage
              </Typography>
              VX1671

              <Typography sx={{fontSize: 10, mt:1}}>
              Issue Date
              </Typography>
              {currentDateTime}

              <Typography sx={{fontSize: 10, mt:1}}>
              Packing List Date
              </Typography>
              {currentDateTime}
          </Item>
          
          <Divider />

          <Item sx={{ m: 1 , boxShadow:"0"}}>
          <Typography sx={{fontSize: 12}}>
              Modified by: WaterZ
           </Typography>
           <Typography sx={{fontSize: 12}}>
              DateModified: {currentDateTime}
           </Typography>
           <Typography sx={{fontSize: 12}}>
              Created by: WaterZ
           </Typography>
           <Typography sx={{fontSize: 12}}>
              Date Created: {currentDateTime}
           </Typography>
          </Item>
        </Box>
        
      </Box>
    </Box>
  );
}
