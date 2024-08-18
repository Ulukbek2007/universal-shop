import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../store/slices/getDataSlices'
import { Link } from 'react-router-dom';
import heart from '../img/heartfalse.svg'
import { pushHeart } from '../store/slices/toHeart';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
const Home = () => {
  const data = useSelector(state => state.getData.data)
  const heartData = useSelector(state => state.heart.heart)

  const dispatch = useDispatch()
  const [menuValue, setMenuValue] = useState('column')
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  const addToHeart = (el) => {
    const filtered = heartData.filter(item => item.id == el.id)
    if (filtered.length == 0) {
      dispatch(pushHeart(el))
      toast.success('Товар успешно добавлен(а) <<Избранное>>')
    }
    else {
      toast.error('Этот товар уже есть в <<Избранное>>')
    }
  }
  return (
    <div className='home-container'>
      <Helmet>
        <title>Все товары</title>
        <meta name="description" content="Эта элегантная футболка с воротником — отличное сочетание классического стиля и комфорта. Изготовленная из мягкого и дышащего хлопка, она обеспечивает вам удобство в течение всего дня. Воротник придает футболке более формальный и законченный вид, что делает её отличным выбором как для повседневного ношения, так и для более нарядных случаев.Крой футболки идеально сидит по фигуре, подчеркивая её форму, но не стесняя движений. Универсальные цвета и лаконичный дизайн позволяют легко сочетать её с джинсами, брюками или шортами, а также использовать в качестве основы для более сложных образов.Данная футболка станет незаменимой в вашем гардеробе, добавив элегантности и стиля в каждодневные луки.Эта универсальная футболка без воротника с петлей — идеальное решение для создания стильного и комфортного образа. Выполненная из высококачественного, мягкого и дышащего хлопка, она обеспечивает отличное ощущение комфорта и легкости в течение всего дня. Отсутствие традиционного воротника придает футболке современный и расслабленный вид, а петля на шее добавляет акцентный элемент, который привлекает внимание и подчеркивает оригинальность дизайна.Крой футболки прямой, что обеспечивает свободу движений и комфорт в любой ситуации. Она легко сочетается с джинсами, брюками или шортами, становясь отличной основой для как повседневных, так и более нарядных образов.Доступна в различных цветах, эта футболка станет незаменимым элементом вашего гардероба, добавляя в него нотки современного стиля и элегантности." />
        <meta name="keywords" content="футболка,мужское,женское,спортивки,водолазки" />
      </Helmet>
      {data.length != 0 && data.map(el => (
        <div className='home-cart-container' key={el.id}>
          <Link to={`/detail/:${el.id}`}><img src={el.img[0]} alt="ICON NOT FOUND" /></Link>

          <div className='home-detail-container'><div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}><p style={{ fontSize: '16', fontWeight: 'bold' }}>{el.category}</p><p style={{ fontSize: 12 }}>{el.name.length > 25 ? `${el.name.slice(0, 25)}...` : el.name}</p></div></div>
          <div>
            <div className='home-about-container'><h3>{el.price}сом</h3><img onClick={() => addToHeart(el)} src={heart} alt="" /> </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Home;