import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const theme = createTheme();

export default function HospitalFilter() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>Selecione os dados que deseja filtrar</h1>
        <Box
          sx={{
            marginTop: 14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6} justifyContent="flex-start" container>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="f" control={<Radio />} label="Paciente" />
                  <FormControlLabel value="m" control={<Radio />} label="Hospital" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid container spacing={2} marginTop={5}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>São Paulo</MenuItem>
                    <MenuItem value={20}>Rio de Janeiro</MenuItem>
                    <MenuItem value={30}>Minas de Gerais</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Cidade</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>São Paulo</MenuItem>
                    <MenuItem value={20}>Rio de Janeiro</MenuItem>
                    <MenuItem value={30}>Belo Horizonte</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Equipamento utilizado</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>São Paulo</MenuItem>
                    <MenuItem value={20}>Rio de Janeiro</MenuItem>
                    <MenuItem value={30}>Belo Horizonte</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Hospital</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>São Paulo</MenuItem>
                    <MenuItem value={20}>Rio de Janeiro</MenuItem>
                    <MenuItem value={30}>Belo Horizonte</MenuItem>
                  </Select>
                </FormControl>
              </Grid>




              <Grid item xs={12} sm={12}>

                <TextField
                  type="date"
                  required
                  fullWidth
                  id="date"
                  name="date"
                  autoComplete="date"
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} justifyContent="flex-start" container>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="f" control={<Radio />} label="Feminino" />
                    <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="o" control={<Radio />} label="Outro" />
                  </RadioGroup>
                </FormControl>
              </Grid> */}

              {/* <Grid item xs={6}>
                <Button fullWidth variant="outlined" href="/home">Salvar</Button>
              </Grid> 
              <Grid item xs={6}>
                <Button fullWidth variant="outlined" href="/home">Cancelar</Button>
              </Grid>*/}
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}