import React from 'react'
import found from '../img/notfound.svg'
const Cart = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <img width={400} height={400} src={found} alt="" />
      <h1>СТРАНИЦА НЕ НАЙДЕН</h1>
    </div>
  )
}

export default Cart