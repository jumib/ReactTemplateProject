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
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#023eb5',
    },
    form: {
      width: '90%', // Fix IE 11 issue.
      marginTop: theme.spacing(5),
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
    },
    root: {
      minWidth: '1000px',
      height: '500px',
      margin: '220px',
    },
    background: {
      backgroundColor: 'rgba( 255, 255, 255, 0.9 )'
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
    const userInfo = user

    // console.log(userInfo)


    const [age, setAge] = React.useState('');


    return (<User>
      <Fade bottom>
    <Container component="main" maxWidth="xs" className={classes.root}>
    <Card variant="outlined" className={classes.background}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container spacing={8}>
          <Grid item xs={6}>
              <TextField
              className={classes.formControl}
                autoComplete="name"
                name="name"
                variant="outlined"
                // value={user.name}
                required
                fullWidth
                id="name"
                label="이름"
                autoFocus
                onChange={handleChange}
              />
              <TextField
              className={classes.formControl}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="이메일"
                name="email"
                // value={user.email}
                autoComplete="email"
                onChange={handleChange}
              />
       
              <TextField
              className={classes.formControl}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호"
                // value={user.password}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
          </Grid>  
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <FormLabel component="legend"> * 질문 1 : 당신의 투자 유형은? </FormLabel><br/>
                  <RadioGroup row aria-label="position" name="type" onChange={handleChange}>
                  <FormControlLabel value="a" control={<Radio color="primary" />} label="공격형" />
                  <FormControlLabel value="b" control={<Radio color="primary" />} label="안정형" />
                  <FormControlLabel value="c" control={<Radio color="primary" />} label="자기만족형" />
                  </RadioGroup>
            </FormControl>
       
            <FormControl className={classes.formControl}>
              <FormLabel component="legend">* 질문 2 : 성별은? </FormLabel><br/>
                  <RadioGroup row aria-label="position" name="gender" onChange={handleChange}>
                  <FormControlLabel value="M" control={<Radio color="primary" />} label="남성" />
                  <FormControlLabel value="F" control={<Radio color="primary" />} label="여성" />
                  </RadioGroup>
            </FormControl>
   
            <FormControl className={classes.formControl}>
              <FormLabel component="legend">* 질문 3 : 나이대는? </FormLabel><br/>
              {/* <InputLabel id="demo-controlled-open-select-label">Age</InputLabel> */}
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                name="age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>선택하기</em>
                </MenuItem>
                <MenuItem value={20}>20대</MenuItem>
                <MenuItem value={30}>30대</MenuItem>
                <MenuItem value={40}>40대</MenuItem>
                <MenuItem value={50}>50대</MenuItem>
                <MenuItem value={60}>60대 이상</MenuItem>
              </Select>
            </FormControl>
        
          </Grid>
          </Grid>      
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={e => dispatch(userActions.register(userInfo))}
            >
              가입하기
            </Button><br/><br/>
            <Grid container justify="flex-center">
              <Grid item>
                <Link href="/signin" variant="body2">
                  이미 계정을 가지고 있습니다
                </Link>
              </Grid>
            </Grid>
        </form>
      </div>
      </Card>
    </Container>
    </Fade>
    </User>)
}

export default Signup