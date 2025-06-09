import bossUticora from '../../Pictures/Uticora.png';
import heroes from '../../Pictures/Party.png';
import data from '../../bd.json';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

const ContentBossUticora = () => {
  
  let navigate = useNavigate();

  let [key, setKey] = useState(94);
  const [HPboss, setHPBoss] = useState(1200)
  const [HPheroes, setHPHeroes] = useState(500)
  const [showComponent, setShowComponent] = useState(true);

  function removeData(){
    if(key === 94 || key === 96 || key === 100 || key === 102 || key === 104 || key === 105){
      setShowComponent(false)
    }
    if(key === 95 || key === 98 || key === 101 || key === 103 ){
      setShowComponent(true)
    }
  }

  function getMap(){
    if(key === 105){
      key = 94
      navigate('/106')
    }
  }

  const checked = () => {
    let ansver = data.contents[key].answer;
    let check = document.querySelector('.inputAppWords')?.value;
    if(check === ansver) {
      setKey(key + 1)
      setHPBoss(HPboss-100)
      removeData()
      getMap()
     }else {
      setHPHeroes(HPheroes-100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(94)
      }
    }
  }
 
  function update_1(){
      getMap()
    if(data.contents[key].answer.answer_1[1] === true){
       setKey(key + 1)
       setHPBoss(HPboss-100)
       removeData()
    } else {
      setHPHeroes(HPheroes-100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(94)
      }
    }
  }
  function update_2(){
    getMap()
    if(data.contents[key].answer.answer_2[1] === true){
      setKey(key + 1)
      setHPBoss(HPboss-100)
      removeData()
    } else {
      setHPHeroes(HPheroes-100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(94)
      }
    }
  }
  function update_3(){
    getMap()
    if(data.contents[key].answer.answer_3[1] === true){
      setKey(key + 1)
      setHPBoss(HPboss-100)
      removeData()
    } else {
      setHPHeroes(HPheroes - 100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(94)
      }
    }
    
  }
  function update_4(){
    getMap()
    if(data.contents[key].answer.answer_4[1] === true){
      setKey(key + 1)
      setHPBoss(HPboss-100)
      removeData()
    } else {
      setHPHeroes(HPheroes - 100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(94)
      }
    }
  }
  const content = [
    <div key={1}>
      <div className='words'>{data.contents[key].quest}</div>
      <div className='buttons__content'>
      { showComponent && <button onClick={update_1} className="button">{data.contents[key].answer.answer_1[0]}</button>}
      { showComponent && <button onClick={update_2} className="button">{data.contents[key].answer.answer_2[0]}</button>}
      { showComponent && <button onClick={update_3} className="button">{data.contents[key].answer.answer_3[0]}</button>}
      { showComponent && <button onClick={update_4} className="button">{data.contents[key].answer.answer_4[0]}</button>}
      </div>
    </div>
  ]
  const content2 = [
    <div key={2} >
      <div className='words'>{data.contents[key].quest}</div>
      <div className='wrap'>
        <input id="masswge"  placeholder="Введите слово" className='inputAppWords'></input>
        <button onClick={checked} className='buttonOK'>ОК</button>
      </div>
    </div>  
  ]

  function getContent(){
    if(key === 94 || 
       key === 96 ||
       key === 99 ||
       key === 100 ||
       key === 102 ||
       key === 104 
      )
    {
     return content
    } else if (key === 95 || 
               key === 97 ||
               key === 98 ||
               key === 101 ||
               key === 103 ||
               key === 105
              ){
     return content2
    } 
  }


  return (
  <main>
   <div className="header">
    <div className="wrapHeroes">
      <div className='contentHeroes'>
          <img className="heroes" src={heroes} alt="heroes"/>
          <p className='HP'>Герои: {HPheroes}HP</p>
      </div>
      <div>
        <img 
        animate={{ x: 100 }}  
        transition={{ duration: 0.5 }}
        className="bossFrog" src={bossUticora} alt="bossUticora"/>
        <p className='HP'>Утикора: {HPboss}HP</p>
      </div>
    </div>
  </div>
    {getContent()}
  </main>
  )
}

export default ContentBossUticora