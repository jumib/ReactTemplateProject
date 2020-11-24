  
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
import { useDispatch } from 'react-redux';
import { userActions } from 'modules/user.action';
import {User} from '../../templates/User'
import Card from '@material-ui/core/Card'

// https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in

  
  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(4),
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      minWidth: '700px',
      height: '500px',
      margin: 'auto',
    },
    background: {
      backgroundColor: 'rgba( 255, 255, 255, 0.9 )'
    }

  }));

const Signin = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  
    return (<User>
      <Container component="main" maxWidth="xs" className={classes.root}>
        <Card variant="outlined" className={classes.background}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(`${e.target.value}`)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(`${e.target.value}`)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              // type="submit"
              fullWidth
              color="primary"
              variant="contained"
              className={classes.submit}
              onClick={e => dispatch(userActions.login(email,password))}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/signup" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        </Card>
      </Container>
      </User>
    );
  }

export default Signin