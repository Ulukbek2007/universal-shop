import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeHeart } from '../store/slices/toHeart';
import deleted from '../img/delete.svg';
import empty from '../img/empty.svg';

import { toast } from 'react-toastify';
const Heart = () => {
  const pushedHeart = useSelector(state => state.heart.heart)
const heartData=useSelector(state=>state.heart.heart)
const dispatch=useDispatch()
  console.log(pushedHeart);
  
  return (
    <div className='home-container'>
    {heartData.length != 0 ? heartData.map(el => (
      <div className='home-cart-container' key={el.id}>
        <Link to={`/detail/:${el.id}`}><img src={el.img[0]} alt="ICON NOT FOUND" /></Link>

        <div className='home-detail-container'><div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}><p style={{ fontSize: '16', fontWeight: 'bold' }}>{el.category}</p><p style={{ fontSize: 12 }}>{el.name.length > 25 ? `${el.name.slice(0, 25)}...` : el.name}</p></div></div>
        <div>
          <div className='home-about-container'><h3>{el.price}сом</h3><img onClick={()=>{dispatch(removeHeart(el));toast.success('Товар успешно удален из <<Избранное>>')}} src={deleted} alt="" /> </div>
        </div>
      </div>
    )):<Link to={'/'} className='to-home-heart'><img  src={empty} alt='ICON NOT FOUND'/><h1>СТРАНИЦА ПУСТ</h1></Link>}
  </div>
  )
}

export default Heart