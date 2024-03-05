// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import {CopyBlock, dracula} from "react-code-blocks";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {apiLogin} from "../../service/LoginService";
import Box from "@mui/material/Box";
import Json from "../../@core/utils/json";

const Home = () => {

  const ktkDev = 'a39401275d1b300aa789fb22aea4148a-9c70933aff6b2a6d08c687a6cbb6b765-e77989ed21758e78331b20e477fc5582'
  const ktkCi = 'a39401275d1b300aa789fb22aea4148a-9c70933aff6b2a6d08c687a6cbb6b765-35ea51baf1fe7f0142ad5f950855dde0'

  const [data, setData] = useState({})
  const [ktk, setKtk] = useState(ktkDev)
  const [environment, setEnvironment] = useState('dev')

  useEffect(() => {
    if (environment === 'dev') setKtk(ktkDev)
    if (environment === 'ci') setKtk(ktkCi)
  }, [environment]);

  const handleChange = event => {
    setEnvironment(event.target.value)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Kick start your project 🚀'></CardHeader>
          <CardContent>
            <FormControl fullWidth sx={{my: 5}}>
              <InputLabel id='demo-simple-select-outlined-label'>Ambiente</InputLabel>
              <Select
                label='Ambiente'
                value={environment}
                id='demo-simple-select-outlined'
                labelId='demo-simple-select-outlined-label'
                onChange={handleChange}
              >
                <MenuItem value={'dev'}>DEV</MenuItem>
                <MenuItem value={'ci'}>CI</MenuItem>
              </Select>
            </FormControl>
            <Box>

            </Box>

            <Button onClick={() => {
              apiLogin(environment, {
                email: 'b2b.g66+clp-27@gmail.com',
                password: 'Global66'
              }).then((r) => {
                console.log(r)
                setData(r)
              })
            }}>
              Login
            </Button>

            <Box sx={{my: 10}}>
              <Json data={data}/>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ACL and JWT 🔒'></CardHeader>
          <CardContent>
            <Typography sx={{mb: 2}}>
              Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are
              implemented in the starter-kit as well.
            </Typography>
            <Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

Home.guestGuard = true

export default Home
