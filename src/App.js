import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, orange } from '@material-ui/core/colors';

const useStyle = makeStyles({
  root: {
    margin: 10,
    borderRadius: 40,
    background: "linear-gradient(50deg, #2857a4 48%, cyan 94%)",
    color: "white",
    padding: "10px 30px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[400]
    },
    secondary: {
      main: orange[600]
    }
  }
});

function ButtonStyled() {
  const classes = useStyle();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon color='secondary' />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField
            variant="filled"
            // placeholder="type here..."
            type="email"
            label="Enter email"
            placeholder="test@text.com"
          />
          <CheckboxExample />
          <ButtonGroup color="primary" variant="contained">
            <Button
              startIcon={<SaveIcon />}
              size="small"
              // variant="contained"
              // color="primary"
            >
              Save
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              size="small"
              // variant="contained"
              // color="secondary"
            >
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
