import { Fragment, useState } from 'react';

const useInput=(vaildInput)=>{
  const [entervalue, setentervalue] = useState('');
  const [validclickvalue, setValidClickvalue]= useState(false);

  const validvalue= vaildInput(entervalue);
  const errorvalue = !validvalue && validclickvalue


  const changevalue = (event) => {
    setentervalue(event.target.value)
  }


  const Blurvalue = (event) => {
    setValidClickvalue(true)
  }
  


  const restvalue=()=>{
    setentervalue('')
    setValidClickvalue(false)
  }

  return{
    entervalue,
    validvalue,
    errorvalue,
    changevalue,
    Blurvalue,
    restvalue,
  }
}
export default useInput;