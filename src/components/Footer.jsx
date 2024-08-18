import React, { useEffect } from 'react'
import home from '../img/home.svg'
import heart from '../img/heart.svg'
import cart from '../img/cart.svg'
import settings from '../img/settings.svg'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getLocation } from '../store/slices/getPathSlices'

const Footer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const looc = window.location.pathname
  useEffect(() => {
    dispatch(getLocation(looc))
  }, [looc])
  
  return (
    <div className='footer-container'>
      <img
        onClick={() => { navigate('/'); }}
        className={`footer-img ${looc == '/' ? `footer-scale-img` : ''}`}
        src={home}
        alt='' />
      <img
        onClick={() => { navigate('/heart'); }}
        className={`footer-img ${looc== '/heart' ? `footer-scale-img` : ''}`}
        src={heart}
        alt='' />
      <img
        onClick={() => { navigate('/cart'); }}
        className={`footer-img ${looc == '/cart' ? `footer-scale-img` : ''}`}
        src={cart}
        alt='' />
      <img
        onClick={() => { navigate('/settings'); }}
        className={`footer-img ${looc == '/settings' ? `footer-scale-img` : ''}`}
        src={settings}
        alt='' />
    </div>
  )
}

export default Footer;