import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{ height: '300px' }} className='w-full bg-blue-500 pt-20 pl-10'>
    <div className="flex justify-between font-bold">
      <div style={{ width: '400px' }} className="intro">
        <h5><i class="fa-solid fa-bowl-food me-2 text-white"></i><span className='font-bold text-white'>Foodss</span></h5>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consectetur </p>
        <p>Lorem ipsum dolor sit</p>
      </div>
      <div className="">
        <h5>Links</h5>
        <Link to={'/'} style={{ textDecoration: 'none', color:'black' }}>Home Page</Link> <br />
        <Link to={'/:id/view'} style={{ textDecoration: 'none', color:'black' }}>View</Link>
      </div>
      <div className="">
        <h5>Guides</h5>
        <a href="https://react.dev/" style={{ textDecoration: 'none', color:'black' }} target='_blank'>React</a> <br />
        <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color:'black' }} target='_blank'>React Bootstrap</a> <br />
        <a href="https://reactrouter.com/en/main" style={{ textDecoration: 'none', color:'black' }} target='_blank'>React Router</a>
      </div>
      <div className="">
        <h5>Contact Us</h5>
        <div className='pt-1'>
          <input placeholder='Enter your email here' type="text" className='form-control rounded' />
          <button className='btn btn-info ms-1'><i className='fa-solid fa-arrow-right'></i></button>
        </div>
        <div className='flex gap-3 pt-1'>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-brands fa-facebook'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-brands fa-github'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-solid fa-phone'></i></a>
        </div>
      </div>
    </div>
    <p className='text-center mt-3'>Copyright &copy: June 2024 Batch ,Foodss . Built with React .
    </p>
  </div>
  )
}

export default Footer