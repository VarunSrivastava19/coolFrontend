import React, { forwardRef } from 'react'
import { TextField, } from '@mui/material';

// function PhoneNumberInput(props, ref) {
//   return (
//     <TextField
//       {...props}
//       id="contact-number-input"
//       name="contact-number"
//       label="Contact Number"
//       type="tel"
//       // value={formValues.contactNum}
//       // onChange={handleInputChange}

//       inputRef={ref}
//       color='secondary'
//     />
//   )
// }

const PhoneNumberInput = (props, ref) => {
  return (
    <TextField
      {...props}
      id="contact-number-input"
      name="contact-number"
      label="Contact Number"
      type="tel"
      inputRef={ref}
      color='secondary'
    />
  )
}

export default forwardRef(PhoneNumberInput)
