import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const currentYear=new Date().getFullYear()

  return (
    <div>
      <footer className='bg-dark text-light pt-5 mt-5 text-light'>
        <div className="container-fluid">
          <div className="row text-center text-md-start">
      <div className="col-md-3 mb-4">
      <h5>About Our Store</h5>
      <p>Your go-to destination for quality product, exclusive deals and seemless online shopping</p>
      </div>
      <div className="col-md-3 mb-4">
      <h5>Pages</h5>
      <ul className='list-unstyled'>
        <li><Link to='/' className='text-decoration-none text-light'>Home</Link></li>
        <li><Link to='/about' className='text-decoration-none text-light'>About</Link></li>
        <li><Link to='/service' className='text-decoration-none text-light'>Service</Link></li>
        <li><Link to='/contact' className='text-decoration-none text-light'>Contact</Link></li>
      </ul>
      </div>


      <div className="col-md-3 mb-4">
        <h5>Follow us</h5>
        <Link to='#' className='me-2 text-decoration-none text-light'> Facebook</Link>
        <Link to='#' className='me-2 text-decoration-none text-light'> Instagram</Link>
        <Link to='#' className=' text-decoration-none text-light'> Twiter</Link>
      </div>


      <div className="col-md-3 mb-4">
        <h5>Partners</h5>
        <p>Partner1</p>
        <p>Partner2</p>
        <p>Partner3</p>
      </div>
          </div>

          <div className="text-center py-3 border-top">
            <small>&copy; {currentYear}. Company Name. All rights Reserved</small>

          </div>
        </div>

      </footer>
      
    </div>
  )
}

export default Footer