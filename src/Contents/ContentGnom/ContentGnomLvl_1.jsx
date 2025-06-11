import GuildMaster from '../../Pictures/GuildMaster.png';
import data from '../../bd.json';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

const ContentGnomLvl_1 = () => {
  
let [key, setKey] = useState(1);
let navigate = useNavigate();
const checked = () => {
  let ansver = data.contents[key].answer;
  let check = document.querySelector('.inputAppWords')?.value;
  if(check.toLowerCase() === ansver) {
    setKey(key + 1)
    document.querySelector('.inputAppWords').value = ''
    if(key === 5){
      navigate('/6')
    } 
   }else{
     navigate('/0')
   }
}
  return (
     <div className="App">
  <main>
   
  <div className="header">
    <div className="TextOfGuildMaster">
      <p className="ConnentOfGuildMaster">{data.contents[key].textGuilgMaster}</p>
    </div>
    <img className="GuildMaster" src={GuildMaster} alt="GuildMaster"/>
  </div>
      <div className='words'>{data.contents[key].quest}</div>
      <div className='wrap'>
        <input id="masswge"  placeholder="Введите слово" className='inputAppWords'></input>
        <button onClick={checked} className='buttonOK'>ОК</button>
      </div>
  </main>
  </div>
  
  )
  
}

export default ContentGnomLvl_1