import bossDragon from '../../Pictures/Dragon.png';
import heroes from '../../Pictures/Party.png';
import data from '../../bd.json';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

const ContentBossDragon = () => {
  
  let navigate = useNavigate();

  let [key, setKey] = useState(107);
  const [HPboss, setHPBoss] = useState(2000)
  const [HPheroes, setHPHeroes] = useState(500)
  const [showComponent, setShowComponent] = useState(true);

  function removeData(){
    if(key === 111||
      key === 121 ||
      key === 126){
      setShowComponent(false)
    }
    if(key === 118){
      setShowComponent(true)
    }
  }

  function getMap(){
    if(key === 126){
      key = 107
      navigate('/127')
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
        setKey(107)
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
        setKey(107)
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
        setKey(107)
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
        setKey(107)
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
        setKey(107)
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
    if(key === 107 || 
       key === 108 ||
       key === 109 ||
       key === 110 ||
       key === 111 ||
       key === 119 || 
       key === 120 || 
       key === 121 
      )
    {
     return content
    } else if (key === 112 || 
               key === 113 ||
               key === 114 ||
               key === 115 ||
               key === 116 ||
               key === 117 ||
               key === 118 || 
               key === 122 || 
               key === 123 || 
               key === 124 || 
               key === 125 || 
               key === 126 
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
        className="bossFrog" src={bossDragon} alt="bossDragon"/>
        <p className='HP'>Дракон: {HPboss}HP</p>
      </div>
    </div>
  </div>
    {getContent()}
  </main>
  )
}

export default ContentBossDragon