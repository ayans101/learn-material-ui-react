import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from '@material-ui/core/TextField';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon style={{ color: 'DarkCyan' }}/>}
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
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
