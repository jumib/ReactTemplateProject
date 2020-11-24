import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { userActions } from 'modules/user.action';
import { useDispatch } from 'react-redux'
import {User} from '../../templates/User'
import {FormControl,FormLabel, RadioGroup, Radio, Card } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

// https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-up


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    card: {
      width: '500px' 
    }
  }));
 
const Signup = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [user, setUser] = useState({
      email: '',
      name: '',
      password: '',
      type: '',
      gender: '',
      age: '',
    })  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser(user => ({ ...user, [name]: value }));
    }

    // const userInfo = JSON.stringify(user)
    // const userInfo = JSON.parse(user)
    // const userInfo = user

    // console.log(userInfo)


    const [age, setAge] = React.useState('');


    return (<User>
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                // value={user.name}
                required
                fullWidth
                id="name"
                label="Name"
                // autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // value={user.email}
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                // value={user.password}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            <br/><br/><br/><br/><br/>
            <Card className={classes.card}>
            <h3>SURBEY</h3><br/><br/>
            <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">질문 : 당신의 투자 유형은? </FormLabel><br/>
                  <RadioGroup row aria-label="position" name="type" onChange={handleChange}>
                  <FormControlLabel value="a" control={<Radio color="primary" />} label="공격형" />
                  <FormControlLabel value="b" control={<Radio color="primary" />} label="안정형" />
                  <FormControlLabel value="c" control={<Radio color="primary" />} label="자기만족형" />
                  </RadioGroup>
            </FormControl>
            </Grid><br/>
            <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">질문 : 성별? </FormLabel><br/>
                  <RadioGroup row aria-label="position" name="gender" onChange={handleChange}>
                  <FormControlLabel value="M" control={<Radio color="primary" />} label="남성" />
                  <FormControlLabel value="F" control={<Radio color="primary" />} label="여성" />
                  </RadioGroup>
            </FormControl>
            </Grid><br/>
            <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <FormLabel component="legend">질문 : 나이대? </FormLabel><br/>
              {/* <InputLabel id="demo-controlled-open-select-label">Age</InputLabel> */}
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                name="age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>20대</MenuItem>
                <MenuItem value={30}>30대</MenuItem>
                <MenuItem value={40}>40대</MenuItem>
                <MenuItem value={50}>50대</MenuItem>
                <MenuItem value={60}>60대 이상</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <br/><br/><br/>
            </Card><br/><br/>
            </Grid>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              onClick={e => dispatch(userActions.register(user))}
            >
              Sign Up
            </Button><br/><br/>
            <Grid container justify="flex-center">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid><br/><br/><br/>
            </Grid>
        </form>
      </div>
    </Container>
    </User>)
}

export default Signup