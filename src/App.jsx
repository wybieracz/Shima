import './App.css';
import { useState } from 'react';

const helmetUrl = [
  'https://static4.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Zen-czarno-czerwony-Gratisy-191818_1.jpg',
  'https://static2.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Zen-niebiesko-bialy-Gratisy-191816_1.jpg',
  'https://static5.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Tozz-czarno-zolty-Gratisy-210297_1.jpg',
  'https://static1.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Bard-czarno-bialy-Gratisy-191813_1.jpg',
  'https://static3.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Bard-niebiesko-czarny-Gratisy-191812_1.jpg',
  'https://static5.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Bard-czarno-czerwony-Gratisy-191811_1.jpg',
  'https://static1.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Bard-czarno-szary-Gratisy-191810_1.jpg',
  'https://static2.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-Semi-Flat-czarny-Gratisy-191804_1.jpg',
  'https://static2.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-Semi-Flat-Titanium-czarny-Gratisy-191784_1.jpg',
  'https://static2.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-Semi-Flat-Titanium-szary-Gratisy-191783_1.jpg',
  'https://static5.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-Semi-Flat-niebieski-Gratisy-191781_1.jpg',
  'https://static4.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-szary-Gratisy-191771_1.jpg',
  'https://static4.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-bialy-Gratisy-191770_1.jpg',
  'https://static1.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-F71-Solid-czarny-Gratisy-191764_1.jpg',
  'https://static3.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-i71-Celos-bialo-czarny-Gratisy-191979_1.jpg',
  'https://static2.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-i71-Celos-czarno-srebrny-Gratisy-191978_1.jpg',
  'https://static4.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-i71-antracytowy-Gratisy-175619_1.gif',
  'https://static5.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-i71-szary-Gratisy-175617_1.gif',
  'https://static1.hjc-kaski.pl/pol_pl_Kask-integralny-HJC-i71-Semi-Flat-czarny-Gratisy-175621_1.gif'
]

const bootsUrl = [
  'https://shima.pl/wp-content/uploads/2024/07/SHIMA_REBEL-VENTED_GREY_MEN_DOUBLE_2500x2500.webp',
  'https://shima.pl/wp-content/uploads/2024/07/SHIMA_REBEL-VENT_BLACK_MEN_2500x2500_DOUBLE.webp',
  'https://shima.pl/wp-content/uploads/2024/06/SHIMA_REBEL-WP_BLACK_MEN_2500x2500_DOUBLE.webp',
  'https://shima.pl/wp-content/uploads/2024/06/SHIMA_EDGE_WATERPROOF_MEN_BLACK_DOUBLE__1600x1600.webp',
  'https://shima.pl/wp-content/uploads/2023/02/SHIMA_TAKESHI_BLACK_DOUBLE_1600x1600.webp',
  'https://shima.pl/wp-content/uploads/2023/02/SHIMA_TAKESHI_CAMO_DOUBLE_1600x1600.webp',
  'https://shima.pl/wp-content/uploads/2023/02/SX_2_Evo_Blue_Men_double_1600px.webp',
  'https://shima.pl/wp-content/uploads/2023/02/SX_2_Evo_Brown_Men_double_1600px.webp',
  'https://shima.pl/wp-content/uploads/2023/02/SX_2_Evo_Grey_Men_double_1600px.webp',
  'https://shima.pl/wp-content/uploads/2023/02/SX_2_Evo_Black_Men_double_1600px.webp',
  'https://shima.pl/wp-content/uploads/2023/02/Blake_brown_double_1600px.webp',
  'https://shima.pl/wp-content/uploads/2023/02/Blake_black_double_1600px.webp',
  'https://shima.pl/wp-content/uploads/2023/02/thomson_men_black_double_1600px.webp',
];

const pantsUrl = [
  'https://shima.pl/wp-content/uploads/2024/07/SHIMA_AKIRA_PANTS_FRONT_BLACK_2500x2500.webp',
  'https://shima.pl/wp-content/uploads/2024/04/SHIMA_GIRO_3.0_PANTS-BLACK_FRONT.png',
  'https://shima.pl/wp-content/uploads/2024/04/SHIMA_GIRO-3.0_MEN_KHAKI_FRONT.webp',
  'https://shima.pl/wp-content/uploads/2024/02/SHIMA_JOGGSTER_KHAKI_FRONT_2500X2500.png',
  'https://shima.pl/wp-content/uploads/2024/02/SHIMA_JOGGSTER_BLACK_FRONT_2500X2500.png'
];

const jacketUrl = [
  'https://shima.pl/wp-content/uploads/2024/05/SHIMA_BANDIT_2.0_BLACK_FRONT.png',
  'https://shima.pl/wp-content/uploads/2024/05/SHIMA_BANDIT_2.0_FLUO_FRONT.png',
  'https://shima.pl/wp-content/uploads/2024/05/SHIMA_BANDIT_2.0_RED_FRONT.png',
  'https://shima.pl/wp-content/uploads/2024/01/SHIMA_RUSH_JACKET_RED_FRONT_2500X2500.png',
  'https://shima.pl/wp-content/uploads/2024/01/SHIMA_RUSH_JACKET_FLUO_FRONT_2500X2500.png',
  'https://shima.pl/wp-content/uploads/2024/01/SHIMA_RUSH_JACKET_BLACK_FRONT_2500X2500.png',
  'https://shima.pl/wp-content/uploads/2024/04/SHIMA_Drift_men_red_front_-3.webp',
  'https://shima.pl/wp-content/uploads/2024/04/SHIMA_Drift_men_yellow_fluo_front__1600x1600.webp',
  'https://shima.pl/wp-content/uploads/2024/04/SHIMA_Drift_men_khaki_front_1600px.webp',
  'https://shima.pl/wp-content/uploads/2024/04/SHIMA_Drift_men_black_front__1600x1600.webp',
  'https://shima.pl/wp-content/uploads/2023/01/SHIMA_Drift_men_grey_front_1600px.webp',
  'https://shima.pl/wp-content/uploads/2023/01/SHIMA_BLAKE_JKT_MEN_BLACK_FRONT_1600x1600.webp',
  'https://shima.pl/wp-content/uploads/2023/01/BLAKE_Brown_Front_1600px.webp',
  'https://shima.pl/wp-content/uploads/2022/12/SHIMA_SHADOW_TFL_men_jacket_black_front_1600px.webp',
  'https://shima.pl/wp-content/uploads/2022/12/SHIMA_Winchester_Men_jacket_black_front_800px.webp',
  'https://shima.pl/wp-content/uploads/2022/12/SHIMA_Hunter2_Men_jacket_brown_front_800px.webp',
  'https://shima.pl/wp-content/uploads/2022/12/SHIMA_Hunter_Men_jacket_black_front_800px.webp',
  'https://shima.pl/wp-content/uploads/2024/03/SHIMA_SOLID_PRO_MEN_WHITE_FRONT_2500X2500.png',
  'https://shima.pl/wp-content/uploads/2024/03/SHIMA_SOLID_PRO_MEN_BLACK_FRONT_2500X2500.png',
  'https://shima.pl/wp-content/uploads/2024/03/SHIMA_SOLID_PRO_MEN_FLUO_FRONT_2500X2500.png',
  'https://shima.pl/wp-content/uploads/2024/03/SHIMA_SOLID_PRO_MEN_RED_FRONT_2500X2500.png'
]

const motoUrl = [
  'https://www.honda.pl/content/dam/central/motorcycles/colour-picker/street/cb300r/cb300r_2022/pb-413p_mattepearlagileblue/cb300r_2022_pb-413p_mattepearlagileblue.png/jcr:content/renditions/c4.png',
  'https://www.honda.pl/content/dam/central/motorcycles/colour-picker/street/cb500_hornet/cb500_hornet_2024/nh-436m_matte_gunpowder_black_metallic/2024-CB500-HORNET-MAT-GUNPOWDER-BLACK-METALLIC-Rh-Side.png/jcr:content/renditions/fb_r_w.webp',
  'https://www.honda.pl/content/dam/central/motorcycles/colour-picker/street/cl500/cl500_2025/g-207m_matte_laurel_green_metallic/25YM_CL500_Studio_MAT_LAUREL_GREEN_METALLIC_RHS.png/jcr:content/renditions/fb_r_w.webp',
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
          <button onClick={() => setHelmet(prev => Math.abs(prev - 1) % helmetUrl.length)}>{"<"}</button>
          <img src={helmetUrl[helmet]} style={{ width: 150 }} />
          <span className='counter'>{helmet + 1}/{helmetUrl.length}</span>
          <button onClick={() => setHelmet(prev => Math.abs(prev + 1) % helmetUrl.length)}>{">"}</button>
        </div>
        <div className='element'>
          <button onClick={() => setJacket(prev => Math.abs(prev - 1) % jacketUrl.length)}>{"<"}</button>
          <img src={jacketUrl[jacket]} style={{ width: 300 }} />
          <span className='counter'>{jacket + 1}/{jacketUrl.length}</span>
          <button onClick={() => setJacket(prev => Math.abs(prev + 1) % jacketUrl.length)}>{">"}</button>
        </div>
        <div className='element'>
          <button onClick={() => setPants(prev => Math.abs(prev - 1) % pantsUrl.length)}>{"<"}</button>
          <img src={pantsUrl[pants]} style={{ width: 400 }} />
          <span className='counter'>{pants + 1}/{pantsUrl.length}</span>
          <button onClick={() => setPants(prev => Math.abs(prev + 1) % pantsUrl.length)}>{">"}</button>
        </div>
        <div className='element'>
          <button onClick={() => setBoots(prev => Math.abs(prev - 1) % bootsUrl.length)}>{"<"}</button>
          <img src={bootsUrl[boots]} style={{ width: 150 }} />
          <span className='counter'>{boots + 1}/{bootsUrl.length}</span>
          <button onClick={() => setBoots(prev => Math.abs(prev + 1) % bootsUrl.length)}>{">"}</button>
        </div>
        <div className='element'>
          <button onClick={() => setMoto(prev => Math.abs(prev - 1) % motoUrl.length)}>{"<"}</button>
          <img src={motoUrl[moto]} style={{ width: 500 }} />
          <span className='counter'>{moto + 1}/{motoUrl.length}</span>
          <button onClick={() => setMoto(prev => Math.abs(prev + 1) % motoUrl.length)}>{">"}</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
