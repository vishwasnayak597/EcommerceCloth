import React from 'react';
import './FormInput.styles.scss';

//other props include name,value,type sent from signin
const FormInput=({handleChange,label,...otherProps})=>(
   <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps}/> 
      {
          //if label has value then it does shrink when user types anything
          label?(
          <label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>
              {label}
          </label>)
          :null
      }
   </div>
)

export default FormInput;