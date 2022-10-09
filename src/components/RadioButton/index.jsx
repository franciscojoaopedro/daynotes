import * as React from 'react';
import { withStyles } from '@mui/material/styles'; 
import Radio from '@mui/material/Radio';

import "./style.css"



const RadioButton=()=>{
    const [selectedValue, setSelectedValue] = React.useState('a');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);

    }

    // const CustomRadio=withStyles({
    //     root:{
    //         color:'#ffd3ca','&$checked':{color:'#e88f7a',},
    //     },
    //     checked:{},
    // })((props)=><Radio color='default' {...props} />);

    return(
    <div className='radioOptions'>
    <button>
     <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        color={"success"}
      />
      <span>Todos</span>
    </button>
    <div>
     <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        color={"warning"}
      />
      <span>Prioridade</span>
    </div>
    <div>
     <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        color={"primary"}
      />
      <span>Normal</span>
    </div>
    </div>
    )   
}

export default RadioButton;