import './App.css';
import { useState } from 'react';

const helmetUrl = [
  'https://static4.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-szary-Gratisy-191771_1.jpg',
  'https://static1.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-czarny-Gratisy-191764_1.jpg',
  'https://static4.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-bialy-Gratisy-191770_1.jpg',
  'https://static2.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-Semi-Flat-czarny-Gratisy-191804_1.jpg',
  'https://static2.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-Semi-Flat-Titanium-czarny-Gratisy-191784_1.jpg',
  'https://static2.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-Semi-Flat-Titanium-szary-Gratisy-191783_1.jpg'
]

const bootsUrl = [
  'https://shima.pl/wp-content/uploads/2024/06/SHIMA_EDGE_VENTED_MEN_BLACK_DOUBLE_1600x1600.webp',
  'https://shima.pl/wp-content/uploads/2023/02/SHIMA_TAKESHI_BLACK_DOUBLE_1600x1600.webp',
  'https://secamoto.com/wp-content/uploads/2025/01/SPEED-BLACK-1.jpg?_t=1740309480',
  'https://secamoto.com/wp-content/uploads/2023/12/Traffic-II-Black-3-1920x1920.jpg?_t=1740309480',
  'https://rebelhorn.pl/cdn/shop/files/Frame10_1d186954-b9c8-4978-b29d-40097a8bd496.png?v=1710329795&width=480',
  'https://rebelhorn.pl/cdn/shop/files/Frame10_7d78a317-a3c3-4527-a426-628ec11cafd2.png?v=1710328976&width=480'
];

const pantsUrl = [
  'https://secamoto.com/wp-content/uploads/2024/10/SQUARE-II-WASHED-BLACK-1-800x800.jpg',
  'https://secamoto.com/wp-content/uploads/2023/12/Jeansy-Squadron-black-meskie-800x800.jpg',
  'https://secamoto.com/wp-content/uploads/2024/10/BADLANDS-ARM-BLACK-1-800x800.jpg',
  'https://shima.pl/wp-content/uploads/2024/07/SHIMA_AKIRA_PANTS_FRONT_BLACK_2500x2500.webp',
  'https://shima.pl/wp-content/uploads/2024/04/SHIMA_GIRO_3.0_PANTS-BLACK_FRONT.png',
  'https://shima.pl/wp-content/uploads/2024/02/SHIMA_JOGGSTER_BLACK_FRONT_2500X2500.png'
];

const jacketUrl = [
  'https://www.spidi.com/media/catalog/product/cache/1314436a53aef9670e8fdedd9b512180/t/e/tek-net-t312-026-r2.png',
  'https://secamoto.com/wp-content/uploads/2024/03/VENTI-PRO-1-800x800.jpg',
  'https://secamoto.com/wp-content/uploads/2023/12/Stream-Evo-Black-Men-1-800x800.jpg',
  'https://secamoto.com/wp-content/uploads/2024/03/Aero-Pro-Black-3-800x800.jpg'
]

const motoUrl = [
  'https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_Svartpilen-401-MY24-90-right_%23SALL_%23AEPI_%23V2.png',
  'https://www.honda.pl/content/dam/central/motorcycles/colour-picker/street/cb300r/cb300r_2022/pb-413p_mattepearlagileblue/cb300r_2022_pb-413p_mattepearlagileblue.png/jcr:content/renditions/c4.png',
  'https://www.honda.pl/content/dam/central/motorcycles/colour-picker/street/cb500_hornet/cb500_hornet_2024/nh-436m_matte_gunpowder_black_metallic/2024-CB500-HORNET-MAT-GUNPOWDER-BLACK-METALLIC-Rh-Side.png/jcr:content/renditions/fb_r_w.webp',
  'https://www.honda.pl/content/dam/central/motorcycles/colour-picker/adventure/nx500/nx500_2024/nh-b61p_pearlhorizonwhite/24YM_NX500_Studio_PEARL_HORIZON_WHITE_RHS.png/jcr:content/renditions/fb_r_w.webp'
]

function App() {
  const [helmet, setHelmet] = useState(0);
  const [jacket, setJacket] = useState(0);
  const [pants, setPants] = useState(0);
  const [boots, setBoots] = useState(0);
  const [moto, setMoto] = useState(0);

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <div className='element'>
          <button onClick={() => setHelmet(prev => prev - 1 % helmetUrl.length)}>{"<"}</button>
          <img src={helmetUrl[Math.abs(helmet) % helmetUrl.length]} style={{ width: 150 }} />
          <span className='counter'>{Math.abs(helmet) % helmetUrl.length + 1}/{helmetUrl.length}</span>
          <button onClick={() => setHelmet(prev => prev + 1 % helmetUrl.length)}>{">"}</button>
        </div>
        <div className='element'>
          <button onClick={() => setJacket(prev => prev - 1)}>{"<"}</button>
          <img src={jacketUrl[Math.abs(jacket) % jacketUrl.length]} style={{ width: 300 }} />
          <span className='counter'>{Math.abs(jacket) % jacketUrl.length + 1}/{jacketUrl.length}</span>
          <button onClick={() => setJacket(prev => prev + 1)}>{">"}</button>
        </div>
        <div className='element'>
          <button onClick={() => setPants(prev => prev - 1)}>{"<"}</button>
          <img src={pantsUrl[Math.abs(pants) % pantsUrl.length]} style={{ width: 400 }} />
          <span className='counter'>{Math.abs(pants) % pantsUrl.length + 1}/{pantsUrl.length}</span>
          <button onClick={() => setPants(prev => prev + 1)}>{">"}</button>
        </div>
        <div className='element'>
          <button onClick={() => setBoots(prev => prev - 1)}>{"<"}</button>
          <img src={bootsUrl[Math.abs(boots) % bootsUrl.length]} style={{ width: 150 }} />
          <span className='counter'>{Math.abs(boots) % bootsUrl.length + 1}/{bootsUrl.length}</span>
          <button onClick={() => setBoots(prev => prev + 1)}>{">"}</button>
        </div>
        <div className='element'>
          <button onClick={() => setMoto(prev => prev - 1)}>{"<"}</button>
          <img src={motoUrl[Math.abs(moto) % motoUrl.length]} style={{ width: 500 }} />
          <span className='counter'>{Math.abs(moto) % motoUrl.length + 1}/{motoUrl.length}</span>
          <button onClick={() => setMoto(prev => prev + 1)}>{">"}</button>
        </div>
      </div>
    </div>
  )
}

export default App
