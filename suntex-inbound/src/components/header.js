import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Language } from "./fields/Language";
import Innercontent from "./Innercontent";
import Maincomponent from "./Maincomponent";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "right",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        // p: "10px",
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        // sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

function Header() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        console.log("ADSDGHJKH");
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const themes = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <Box>
      {/* <Box display="grid" gridTemplateColumns="repeat(12, 30px)"> */}
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={themes}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Maincomponent>
              <Innercontent />
            </Maincomponent>
          </Box>
        </ThemeProvider>
        <Language />
      </ColorModeContext.Provider>
    </Box>
    // </Box>
  );
}

export { MyApp, Header };
