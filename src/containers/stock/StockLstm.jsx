import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
  });

const StockLstm = () => {
    const classes = useStyles();

    return (
    <>
        <h3>주가예측</h3>
        <form className={classes.container} noValidate>
        <TextField
            id="datepick"
            label="Birthday"
            type="date"
            defaultValue="2020-06-28"
            InputLabelProps={{
            shrink: true,
            }}
        />
        </form>
        <div>
            <h3>counting ...</h3>
        <p>%%%의 주가는 %원으로 예측되었습니다.</p>
        </div>  
    </>         
    )
}
export default StockLstm