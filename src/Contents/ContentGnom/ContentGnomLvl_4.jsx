import GuildMaster from '../../Pictures/GuildMaster.png';
import data from '../../bd.json';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

const ContentGnomLvl_4 = () => {
  let navigate = useNavigate();
  let [key, setKey] = useState(43);

 const getDataCheck = () => {
    
    if(key === 45){
      key=43
      navigate('/46')
    } 
    setKey(key + 1)
 }

const checked_1 = () => {
  if(data.contents[key].answer.answer_1[1] === true){
    getDataCheck()
   }else{
     navigate('/0')
   }
}
const checked_2 = () => {
  if(data.contents[key].answer.answer_2[1] === true) {
  getDataCheck()
   }else{
     navigate('/0')
   }
}
const checked_3 = () => {
   if(data.contents[key].answer.answer_3[1] === true) {
   getDataCheck()
    }else{
     navigate('/0')
    }
}
const checked_4 = () => {
  if(data.contents[key].answer.answer_4[1] === true) {
   getDataCheck()
    }else{
     navigate('/0')
    }
  }

   return (
  <main>
  <div className="header">
    <div className="TextOfGuildMaster">
      <p className="ConnentOfGuildMaster">{data.contents[key].textGuilgMaster}</p>
    </div>
    <img className="GuildMaster" src={GuildMaster} alt="GuildMaster"/>
  </div>
      <div className='words'>{data.contents[key].quest}</div>
      <div className='buttons__content'>
        <button onClick={checked_1} className="button">{data.contents[key].answer.answer_1[0]}</button>
				<button onClick={checked_2} className="button">{data.contents[key].answer.answer_2[0]}</button>
				<button onClick={checked_3} className="button">{data.contents[key].answer.answer_3[0]}</button>
				<button onClick={checked_4} className="button">{data.contents[key].answer.answer_4[0]}</button>
      </div>
  </main>
  )
  
}

export default ContentGnomLvl_4