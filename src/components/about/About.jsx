import React from 'react'
import YandexMap from './YandexMap'
import styles from './About.module.scss'


export default function About() {
  return (
    <div>
    <div className={styles.ourNumber}>
        
         <li className={styles.infoAboutWeb}>
         За неделю был создан сервис товаров. <br /> Представляющий собой справочник сравнений цен на телефоны, <br /> ноутбуки, комплектующие и гаджеты
         </li >

        <h3>Наш контактный данные:</h3> <br />
           
        <a href="#">+7928-000-00-жди меня</a><br />
        <a href="@intocode_manager">Telegram</a> <br />
        <a href="#">inst</a>
        <h3>Наш Адрес:</h3>
        <a href="https://yandex.ru/maps/org/intocode/50266658498/?ll=45.692374%2C43.324732&z=14">Чеченская республика г.Грозный ул.Трошева 7</a>
         </div>
       
      
  
    
      <YandexMap/>
  </div>
  )
}
