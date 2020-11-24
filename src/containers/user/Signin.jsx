  
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
import Fade from 'react-reveal/Fade';

  
  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#023eb5',
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
      margin: '350px',
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
      <Fade bottom>
      <Container component="main" maxWidth="xs" className={classes.root}>
        <Card variant="outlined" className={classes.background}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일"
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
              label="비밀번호"
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
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/signup" variant="body2">
                  비밀번호를 잊으셨나요?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"아직 계정이 없으신가요?"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        </Card>
      </Container>
      </Fade>
      </User>
    );
  }

export default Signin