import React from 'react'
import { Carousel } from 'react-bootstrap'
import slayd from "./img/slayd1.jpg"
import s from "./Carousel.module.scss"



export default function CarouselBox() {
  return (
    <div className={s.carouselInner}>
      <Carousel>
        <Carousel.Item>

          <img src="https://www.apple.com/v/macbook-air/m/images/overview/hero_endframe__ea0qze85eyi6_large_2x.jpg" alt=""
          className='d-block w-100' 
          />
         <Carousel.Caption>
         <h1>MacBook Air</h1>
          <p className={s.slayde1}>Суперсила профессионалов.</p>
          <a href="#"> Подробнее ⤍</a>
         </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slayd} alt=""
          className='d-block w-100'
          />
         <Carousel.Caption>
          <h2>Ipad Pro</h2>
          <p>Cуперсила чипа Apple M1</p>
          <a href="#"> Подробнее ⤍</a>
         </Carousel.Caption>
        
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://wallpapershome.ru/images/wallpapers/iphone-12-pro-1920x1080-23102.jpg" alt=""
          className='d-block w-100'
          />
         <Carousel.Caption>
          <h1 className={s.slayde3}>Магия от нас!</h1>
          <p>Сравните все модели гаджетов и выберите самый подходящий.</p>
          <a href="#"> Подробнее ⤍</a>
         </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}
