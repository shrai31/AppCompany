import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import Footer from './Footer'
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";

export function Language() {
  const { t, i18n } = useTranslation();
  const [lang, setlang] = React.useState("");

  const handleChange = (event) => {
    setlang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="App">
      <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
        <FormControl style={{width: "200px"}}>
          <InputLabel id="demo-simple-select-label">Lang</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            label="Lang"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"selLang"}>Select Lang</MenuItem> 
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"de"}>Deutsch</MenuItem>
          </Select>
        </FormControl>
      <Footer t={t} />
    </div>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
// export default function WrappedApp() {
//   return (
//     <Suspense fallback="...is loading">
//       <Language />
//     </Suspense>
//   );
// }
