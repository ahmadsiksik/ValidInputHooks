import { Fragment, useState } from 'react';
import useInput from '../hooks/useInput';
import classes from "./simple_Input.module.css"
const SimpleInput = () => {


  const{

    entervalue:enterEmail,
    validvalue:validEmail,
    errorvalue:invalidEmail,
    changevalue:changeEmail,
    Blurvalue:BlurEmail,
    restvalue:restEmailInput,
  
    }= useInput(entervalue => entervalue.includes('@'))
  const{
    entervalue:enterPassword,
    validvalue:validPassword,
    errorvalue:invalidPassword,
    changevalue:changePassword,
    Blurvalue:BlurPassword,
    restvalue:restPasswordInput,}= useInput(entervalue =>entervalue.length > 6)

    let formIsValid = false;

    if (validEmail && validPassword) {
      formIsValid = true;
    }
  const onSubmitForm = (event) => {
    BlurPassword(true);
    BlurEmail(true);

    event.preventDefault();
    if (!validEmail) {
      return
    }

    restEmailInput();
    restPasswordInput();
  }



  return (
    <Fragment>
      <form className={classes.Form} onSubmit={onSubmitForm}>
        <label className={classes.label}  >Please Enter Your Email : </label>
        <input type={'text'} className={classes.input} value={enterEmail} onChange={changeEmail} onBlur={BlurEmail}></input><br />
        {invalidEmail && (
          <div className={classes.errorText}>Your email dont vild</div>
        )}
        <label className={classes.label} >Please Enter Your Password : </label>
        <input type={'password'} className={classes.input} value={enterPassword} onChange={changePassword} onBlur={BlurPassword}></input>
        {invalidPassword && (
          <div className={classes.errorText}>Your Password too short</div>
        )}
        <button className={classes.button} disabled={!formIsValid}> Click Her Please </button>
      </form>
    </Fragment>
  )
}
export default SimpleInput;