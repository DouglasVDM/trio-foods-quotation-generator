import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import {
  ButtonGroup,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
  ThemeProvider,
  createTheme
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
});

const theme = createTheme({
  pallete: {
    primary: {
      main: orange[400]
    }, secondar: {
      main: orange[400]
    }
  }
});

const ButtonStyled = () => {
  const classes = useStyles()
  return <Button className={classes.root}>Test Styled Button</Button>
}

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        icon={<SaveIcon />}
        checkedIcon={<DeleteIcon />}
        onChange={(event) => setChecked(event.target.checked)}
        inputProps={{
          'aria-label': 'secondary-checkbox'
        }}
      />}
      label='Testing Checkbox'
    />
  )
}

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <Typography variant='h2' component='div'>
            Welcome to MUI
          </Typography>
          <Typography variant='subtitle1'>
            Learn how to use Material UI
          </Typography>
          <ButtonStyled />
          <TextField
            variant='filled'
            color='secondary'
            type='email'
            label='SU Email'
            value='sample@sun.ac.za'
          />
          <CheckboxExample />
          <h1>Welcome to Home!</h1>
          <ButtonGroup
            variant='contained'
            color='primary'
          >
            <Button
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              color='secondary'
            >
              Discard
            </Button>
          </ButtonGroup>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default Home;