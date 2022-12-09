import React from 'react'
import s from "./News.module.scss"

export default function AbbreviatedNews() {
  return (
    <div className={s.divNews}>
        <div className={s.news}>
            {/* https://vc.ru/tech/526022-na-rossiyskom-rynke-poyavilis-iphone-14-s-dvumya-slotami-dlya-sim-kart-i-neotklyuchayushchimsya-zvukom-kamery */}
            <img src="https://leonardo.osnova.io/d3ee405e-1406-502d-ac61-b9e85758be9d/-/preview/2100/-/format/webp/" alt="" />
            <h3>На российском рынке появились iPhone 14 с двумя слотами для SIM-карт </h3>
            <div className={s.text}>Сначала некоторые ритейлеры снизили цены на такие модели, но теперь продают по обычным, рассказали источники.</div>
            <div className={s.footer}>
                <div className={s.data}>08.12.2022</div>
                <div className={s.category}>| <a href='/news'>Phone</a></div>
            </div>
        </div>
        <div className={s.news}>
            <img src="https://leonardo.osnova.io/a2480409-c20e-59ed-a42b-f07f4c7224c0/" alt="" />
            <h3>Apple представила новые планшеты iPad Pro с процессором M2 и поддержкой Wi-Fi 6E  </h3>
            <div className={s.text}>Устройства работают на процессорах М2, как в ноутбуках MacBook Air, а не М1, как раньше. В чипах восемь ядер CPU и 10 графических ядер GPU. </div>
            <div className={s.footer}>
            <div className={s.data}>08.12.2022</div>
                <div className={s.category}>| <a href='/news'>MacBook</a> </div>
            </div>
        </div>
        <div className={s.news}>
            <img src="https://leonardo.osnova.io/76d56f8e-1d81-5857-93e2-f66a04237485/" alt="" />
            <h3>Apple представила Apple Watch Ultra — «умные» часы для спортсменов и активного отдыха</h3>
            <div className={s.text}>Компания показала часы на своей осенней онлайн-презентации. The Verge называет их конкурентом профессиональным спортивным часам от Garmin и Polar.</div>
            <div className={s.footer}>
            <div className={s.data}>08.12.2022</div>
                <div className={s.category}>| <a href='/news'>Whatch</a></div>
            </div>
        </div>
    </div>
  )
}
