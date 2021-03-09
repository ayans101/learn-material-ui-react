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
import { blue, orange, grey } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
  typography: {
    h2: {
      color: grey[600],
      marginBottom: 20
    }
  },
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
      <Container maxWidth='xs'>
        <div className="App">
          <header className="App-header">
            <Typography variant='h2' component='div'>
              Welcome to MUI
            </Typography>
            <Typography variant='subtitle'>
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />

            <Grid container spacing='2' justify='center'>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>

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
      </Container>
    </ThemeProvider>
  );
}

export default App;
