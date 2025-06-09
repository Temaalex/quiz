import { HashRouter, Routes, Route } from 'react-router-dom';



import ContentGnomLvl1 from "./Contents/ContentGnom/ContentGnomLvl_1";
import ContentGnomLvl2 from "./Contents/ContentGnom/ContentGnomLvl_2";
import ContentGnomLvl3 from "./Contents/ContentGnom/ContentGnomLvl_3";
import ContentGnomLvl4 from "./Contents/ContentGnom/ContentGnomLvl_4";
import ContentGnomLvl5 from "./Contents/ContentGnom/ContentGnomLvl_5";
import ContentGnomLvl6 from "./Contents/ContentGnom/ContentGnomLvl_6";
import ContentGnomLvl7 from "./Contents/ContentGnom/ContentGnomLvl_7";
import MapGnomLvl1 from "./Contents/ContentGnom/MapGnomLvl_1";
import MapGnomLvl2 from "./Contents/ContentGnom/MapGnomLvl_2";
import MapGnomLvl3 from "./Contents/ContentGnom/MapGnomLvl_3";
import MapGnomLvl4 from "./Contents/ContentGnom/MapGnomLvl_4";
import MapGnomLvl5 from "./Contents/ContentGnom/MapGnomLvl_5";

import ContentElfLvl1 from "./Contents/ContentElf/ContentElfLvl_1"
import ContentElfLvl2 from "./Contents/ContentElf/ContentElfLvl_2"
import ContentElfLvl3 from "./Contents/ContentElf/ContentElfLvl_3"
import ContentElfLvl4 from "./Contents/ContentElf/ContentElfLvl_4"
import ContentElfLvl5 from "./Contents/ContentElf/ContentElfLvl_5"
import ContentElfLvl6 from "./Contents/ContentElf/ContentElfLvl_6"
import ContentElfLvl7 from "./Contents/ContentElf/ContentElfLvl_7"
import MapElfLvl1 from "./Contents/ContentElf/MapElfLvl_1"
import MapElfLvl2 from "./Contents/ContentElf/MapElfLvl_2"
import MapElfLvl3 from "./Contents/ContentElf/MapElfLvl_3"
import MapElfLvl4 from "./Contents/ContentElf/MapElfLvl_4"
import MapElfLvl5 from "./Contents/ContentElf/MapElfLvl_5"

import ContentHumanLvl1 from "./Contents/ContentHuman/ContentHumanLvl_1"
import ContentHumanLvl2 from "./Contents/ContentHuman/ContentHumanLvl_2"
import ContentHumanLvl3 from "./Contents/ContentHuman/ContentHumanLvl_3"
import ContentHumanLvl4 from "./Contents/ContentHuman/ContentHumanLvl_4"
import ContentHumanLvl5 from "./Contents/ContentHuman/ContentHumanLvl_5"
import ContentHumanLvl6 from "./Contents/ContentHuman/ContentHumanLvl_6"
import ContentHumanLvl7 from "./Contents/ContentHuman/ContentHumanLvl_7"
import MapHumanLvl1 from "./Contents/ContentHuman/MapHumanLvl_1"
import MapHumanLvl2 from "./Contents/ContentHuman/MapHumanLvl_2"
import MapHumanLvl3 from "./Contents/ContentHuman/MapHumanLvl_3"
import MapHumanLvl4 from "./Contents/ContentHuman/MapHumanLvl_4"
import MapHumanLvl5 from "./Contents/ContentHuman/MapHumanLvl_5"

import MapForAll from "./Contents/ContentAll/MapForAll"
import ContentBox from "./Contents/ContentAll/ContentBox"
import Error from "./Contents/ContentAll/ContentError";

import ContentBossFrog from "./Contents/ContentBossFrog/ContentBossFrog"
import ContentBosGoblin from './Contents/ContentBossGoblin/ContentBossGoblin';
import ContentBossSkillet from './Contents/ContentBossSkillet/ContentBossSkillet';
import ContentBossUticora from './Contents/ContentBossUticora/ContentBossUticora';
import ContentBossDragon from './Contents/ContentBossDragon/ContentBossDragon';

import MapBossFrog from "./Contents/ContentBossFrog/MapFrogBoss"
import MapBossGoblin from './Contents/ContentBossGoblin/MapGoblinBoss';
import MapBossSkillet from './Contents/ContentBossSkillet/MapSkilletBoss';
import MapBossUticora from './Contents/ContentBossUticora/MapUticoraBoss';
import MapBossDragon from './Contents/ContentBossDragon/MapDragonBoss';

function App() {  
  return (
     <HashRouter>
      <Routes>
      <Route path="0" element={<Error/>} />
      <Route path="67" element={<ContentBox/>} />
      <Route path="68" element={<MapForAll/>} />

      <Route path="69" element={<ContentBossFrog/>} />
      <Route path="74" element={<MapBossFrog/>} />

      <Route path="75" element={<ContentBosGoblin/>} />
      <Route path="82" element={<MapBossGoblin/>} />

      <Route path="83" element={<ContentBossSkillet/>} />
      <Route path="93" element={<MapBossSkillet/>} />

      <Route path="94" element={<ContentBossUticora/>} />
      <Route path="106" element={<MapBossUticora/>} />

      <Route path="107" element={<ContentBossDragon/>} />
      <Route path="127" element={<MapBossDragon/>} />

       <Route path="1" element={<ContentGnomLvl1/>} />
       <Route path="19" element={<ContentGnomLvl2/>} />
       <Route path="31" element={<ContentGnomLvl3/>} />
       <Route path="43" element={<ContentGnomLvl4/>} />
       <Route path="55" element={<ContentGnomLvl5/>} />
       <Route path="56" element={<ContentGnomLvl6/>} />
       <Route path="57" element={<ContentGnomLvl7/>} />
       <Route path="6" element={<MapGnomLvl1/>} />
       <Route path="22" element={<MapGnomLvl2/>} />
       <Route path="34" element={<MapGnomLvl3/>} />
       <Route path="46" element={<MapGnomLvl4/>} />
       <Route path="58" element={<MapGnomLvl5/>} />
       
       
       <Route path="7" element={<ContentElfLvl1/>} />
       <Route path="23" element={<ContentElfLvl2/>} />
       <Route path="35" element={<ContentElfLvl3/>} />
       <Route path="47" element={<ContentElfLvl4/>} />
       <Route path="59" element={<ContentElfLvl5/>} />
       <Route path="60" element={<ContentElfLvl6/>} />
       <Route path="61" element={<ContentElfLvl7/>} />
       <Route path="12" element={<MapElfLvl1/>} />
       <Route path="26" element={<MapElfLvl2/>} />
       <Route path="38" element={<MapElfLvl3/>} />
       <Route path="50" element={<MapElfLvl4/>} />
       <Route path="62" element={<MapElfLvl5/>} />

       <Route path="13" element={<ContentHumanLvl1/>} />
       <Route path="27" element={<ContentHumanLvl2/>} />
       <Route path="39" element={<ContentHumanLvl3/>} />
       <Route path="51" element={<ContentHumanLvl4/>} />
       <Route path="63" element={<ContentHumanLvl5/>} />
       <Route path="64" element={<ContentHumanLvl6/>} />
       <Route path="65" element={<ContentHumanLvl7/>} />
       <Route path="18" element={<MapHumanLvl1/>} />
       <Route path="30" element={<MapHumanLvl2/>} />
       <Route path="42" element={<MapHumanLvl3/>} />
       <Route path="54" element={<MapHumanLvl4/>} />
       <Route path="66" element={<MapHumanLvl5/>} />
    
     </Routes>
    </HashRouter>
  );
}

export default App;
