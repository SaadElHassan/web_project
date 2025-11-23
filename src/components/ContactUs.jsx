import React, { useState } from 'react';


function ContactUs() {
 var reporter = {
    
    fullname: "",
    email: "",
    message: "",
  };
  const [stds, setStds] = useState([]);

  const [state, setState] = useState(reporter);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };




  return (

)
}

export default ContactUs