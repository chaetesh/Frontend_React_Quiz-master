import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
        <i class="fa-regular fa-address-card d-flex my-3" style={{fontSize:'5rem',justifyContent:'center'}}></i>
        <h1 className='d-flex my-3' style={{justifyContent:'center'}}>Contact Us</h1>
        <p className='d-flex my-3' style={{justifyContent:'center'}}>Facing Problem? We are here to help</p>
        <div className="container" style={{width:'50vw'}} >
        <p className='my-5'>
          <h1>CHAT</h1>
          <p>Typical reply time: within 24 hours</p>
        </p>
        </div>
    </div>
  )
}

export default Contact