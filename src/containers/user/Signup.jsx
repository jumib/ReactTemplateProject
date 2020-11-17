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
  }));


const Signup = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [user, setUser] = useState({
      email: '',
      name: '',
      password: ''
    })

    function handleChange(e) {
      const { name, value } = e.target;
      setUser(user => ({ ...user, [name]: value }))
    }


    return (<User>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
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
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            <br/><br/><br/>
            <h3>SURBEY</h3>
            <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">질문 1 모험을 즐기시나요? </FormLabel>
                  <RadioGroup row aria-label="position" onChange={handleChange}>
                  <FormControlLabel value="Y" control={<Radio color="primary" />} label="Y" />
                  <FormControlLabel value="N" control={<Radio color="primary" />} label="N" />
                  </RadioGroup>
            </FormControl>      
            </Grid>
            <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel>질문 2 안정을 추구하는 편인가요?</FormLabel>
                  <RadioGroup row aria-label="position" onChange={handleChange}>
                  <FormControlLabel value="Y" control={<Radio color="primary" />} label="Y" />
                  <FormControlLabel value="N" control={<Radio color="primary" />} label="N" />
                  </RadioGroup>
            </FormControl>      
            </Grid>
            <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel>질문 3 관심있는 테마에 투자하는 스타일이신가요?</FormLabel>
                  <RadioGroup row aria-label="position" onChange={handleChange}>
                  <FormControlLabel value="Y" control={<Radio color="primary" />} label="Y" />
                  <FormControlLabel value="N" control={<Radio color="primary" />} label="N" />
                  </RadioGroup>
            </FormControl>        
            </Grid>
            <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel>질문 4 꾸준한 수익을 원하시나요?</FormLabel>
                  <RadioGroup row aria-label="position" onChange={handleChange}>
                  <FormControlLabel value="Y" control={<Radio color="primary" />} label="Y" />
                  <FormControlLabel value="N" control={<Radio color="primary" />} label="N" />
                  </RadioGroup>
            </FormControl>      
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => dispatch(userActions.register(user))}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </User>)
}

export default Signup