import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Search = styled("div")(({ theme }) => ({
  border: "1px solid #e6e7eb",
  position: "relative",
  // color: "black",
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.secondary,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(-1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  // backgroundColor:"white",
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    // boxShadow: "3",
    // backgroundColor:"rgb(245,245,245)",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: theme.palette.text.secondary,
    [theme.breakpoints.up("md")]: {
      width: "25ch",
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",
  //   fontsize: '22px',
  color: theme.palette.text.secondary,
}));

export default function PrimarySearchAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "",
      cpassword: "asd",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <Box gridColumn="span 12">
        <Item>
          <Item>
            <Typography sx={{ mt: 1, ml: 2, fontSize: 15, fontWeight: "bold" }}>
              Packages/Rolls List
            </Typography>
          </Item>
          <Item>
            <Toolbar>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ bgcolor: "inherit" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  color="inherit"
                />
              </Search>
              <Button
                sx={{ fontWeight: "bold", fontSize: 10, ml: 1 }}
                variant="outlined"
                onClick={handleOpen}
              >
                <AddIcon sx={{ fontSize: 28, pr: 1 }} />
                ADD
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <form onSubmit={formik.handleSubmit}>
                    <h1>Form Detail</h1>
                    <TextField
                      sx={{ m: 1 }}
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                      sx={{ m: 1 }}
                      fullWidth
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                    <TextField
                      sx={{ m: 1 }}
                      fullWidth
                      id="cpassword"
                      name="cpassword"
                      label="Confim Password"
                      type="password"
                      value={formik.values.cpassword}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.cpassword &&
                        Boolean(formik.errors.cpassword)
                      }
                      helperText={
                        formik.touched.cpassword && formik.errors.cpassword
                      }
                    />
                    <Button
                      sx={{ m: 1 }}
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </Box>
              </Modal>

              <Button
                sx={{
                  fontWeight: "bold",
                  fontSize: 10,
                  // mt: 1,
                  ml: 1,
                }}
                variant="outlined"
              >
                <CloudUploadIcon sx={{ fontSize: 28, mr: 1 }} />
                Bulk Upload
              </Button>
            </Toolbar>
          </Item>
        </Item>
      </Box>
    </Box>
  );
}
