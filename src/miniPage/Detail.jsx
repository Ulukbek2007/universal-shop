import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { paramsData, similarData } from "../store/slices/getDataSlices";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Helmet } from "react-helmet";

const Detail = () => {
  const [itog, setItog] = useState(1)
  const [size, setSize] = useState('0')
  const [color, setColor] = useState('0')
  const [value, setValue] = useState('')
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(paramsData());
    dispatch(similarData())
  }, [dispatch]);
  const params = useSelector(state => state.getData.params).find(el => el.id === id.split(':').join(''));
  const similar = useSelector(state => state.getData.similarProducts)
  const similarFilter = similar.filter(el => el.category === params.category && el.id != params.id)
  if (!params || !params.img || params.img.length === 0) {
    return <div>Loading</div>;
  }
  const toWat = () => {
    const encodedMessage = encodeURIComponent(JSON.stringify(toform).split('"').join('').split('{').join('').split('}').join('').split(',').join('\n'));
    const url = `https://wa.me/996557072210?text=${encodedMessage}`;
    window.open(url, '_blank');
    console.log(toform);
  }
  const toform = {
    id: `${params.id}`,
    "Название": params.name,
    "Цена": `${params.price}сом`,
    "Всего": `${parseInt(params.price) * parseInt(itog)}сом`,
    "Кол-во товаров": itog,
    "Размер": params.width[size],
    "Цвет": params.color[color],
    "Адрес":value
  }

  return (
    <div className="detail-container">
      <Helmet>
      <title>{params.name}</title>
      <meta name="description" content="Эта элегантная футболка с воротником — отличное сочетание классического стиля и комфорта. Изготовленная из мягкого и дышащего хлопка, она обеспечивает вам удобство в течение всего дня. Воротник придает футболке более формальный и законченный вид, что делает её отличным выбором как для повседневного ношения, так и для более нарядных случаев.Крой футболки идеально сидит по фигуре, подчеркивая её форму, но не стесняя движений. Универсальные цвета и лаконичный дизайн позволяют легко сочетать её с джинсами, брюками или шортами, а также использовать в качестве основы для более сложных образов.Данная футболка станет незаменимой в вашем гардеробе, добавив элегантности и стиля в каждодневные луки.Эта универсальная футболка без воротника с петлей — идеальное решение для создания стильного и комфортного образа. Выполненная из высококачественного, мягкого и дышащего хлопка, она обеспечивает отличное ощущение комфорта и легкости в течение всего дня. Отсутствие традиционного воротника придает футболке современный и расслабленный вид, а петля на шее добавляет акцентный элемент, который привлекает внимание и подчеркивает оригинальность дизайна.Крой футболки прямой, что обеспечивает свободу движений и комфорт в любой ситуации. Она легко сочетается с джинсами, брюками или шортами, становясь отличной основой для как повседневных, так и более нарядных образов.Доступна в различных цветах, эта футболка станет незаменимым элементом вашего гардероба, добавляя в него нотки современного стиля и элегантности." />
      <meta name="keywords" content="футболка,мужское,женское,спортивки,водолазки" />
      </Helmet>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {params.img.map((img, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img src={img} alt={`Slide ${index}`} style={{ maxWidth: '100%', maxHeight: 480 }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <h2>{params.price}сом</h2>
        <h4>{params.name}</h4>
        <h3>Выберите цвет:</h3>
        <div className="container-detail-color">{params.color.map((el, index) => (
          <div key={index} onClick={() => setColor(index)} style={{ backgroundColor: el }} className={`detail-color ${index == color ? `detail-color-${color}` : ``}`}></div>
        ))}</div>
        <h3>Выберите размера:</h3>
        <div className="container-detail-size">
          {params.width.map((el, index) => (
            <h3 key={index} onClick={() => setSize(index)} className={`detail-size ${index == size ? `size-${size}` : ``}`}>{el}</h3>
          ))}</div>
        <div className="adress-value"><h3>Адрес доставки:</h3><input value={value} type="text"  placeholder="Пишите точную адрес доставки" onChange={(e)=>setValue(e.target.value)}/></div>
        <h3>Количество товара:{itog}</h3>
        <div className="container-detail-count">
          <div className="detail-count">
            <button aria-label="Decrease count" onClick={() => {
              if (itog > 1) {
                setItog(itog - 1);
              }
            }}>-</button>
            <h3>{itog}</h3>
            <button aria-label="Increase count" onClick={() => {
              setItog(itog + 1);
            }}>+</button>
          </div>
          <h2>Итого:{parseInt(params.price) * parseInt(itog)}сом</h2>
        </div >
        <button onClick={toWat} className="detail-buy">Купить</button>
        <div className="detail-info"><h2>Характеристики:</h2>
          <p>Материал: {params.material}</p>
          <p>Страна производства:{params.country}</p>
          <p>Пол: Для {params.person == '0' && 'мужчин и женщин' || params.person == '1' && 'Мужчин' || params.person == '2' && 'Женщин'}</p>
          <p>Описание:{params.description}</p>
        </div>
        {params.ingredients.length > 0 && <div className="detail-ingredients">
          <h2>О товаре</h2>
          {params.ingredients.map(el => (
            <img src={el} alt="ICON NOT FOUND" />
          ))}
        </div>}
        <h2>Похожие товары:</h2>
        <div className="home-cart-similar">
          {similarFilter.map(el => (
            <div className="home-cart-container detail-similar-cart" key={el.id}>
              <Link to={`/detail/:${el.id}`}>
                <img src={el.img[0]} alt="" />
              </Link>
              <div>
                <p style={{ fontSize: 20, fontWeight: 'bold' }}>{el.category}</p>
                <p>{el.name.length > 25 ? `${el.name.slice(0, 25)}...` : el.name}</p>
                <h3>{el.price}сом</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
