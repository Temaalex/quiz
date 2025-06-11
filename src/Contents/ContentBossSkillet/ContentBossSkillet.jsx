import bossSkillet from '../../Pictures/Skillet.jpg';
import heroesImg from '../../Pictures/Party.png';
import data from '../../bd.json';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

const ContentBossSkillet = () => {
  
  let navigate = useNavigate();

  const [bossFrog, setShake] = useState(false)
  function move(){
    setShake(true)
    setTimeout(()=>setShake(false),200)
  }

  const [heroes, setShakeHeroes] = useState(false)
  function moveHer(){
    setShakeHeroes(true)
    setTimeout(()=>setShakeHeroes(false),200)
  }


  let [key, setKey] = useState(83);
  const [HPboss, setHPBoss] = useState(1000)
  const [HPheroes, setHPHeroes] = useState(500)
  const [showComponent, setShowComponent] = useState(true);

  function removeData(){
    if(key === 86 ){
      setShowComponent(false)
    }
    if(key === 89){
      setShowComponent(true)
    }
  }

  function getMap(){
    if(key === 92){
      move()
      key = 83
      navigate('/93')
    }
  }

  const checked = () => {
    let ansver = data.contents[key].answer;
    let check = document.querySelector('.inputAppWords')?.value;
    if(check.toLowerCase() === ansver) {
      move()
      setKey(key + 1)
      document.querySelector('.inputAppWords').value = ''
      setHPBoss(HPboss-100)
      removeData()
      getMap()
     }else {
      moveHer()
      setHPHeroes(HPheroes-100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(75)
      }
    }
  }
 
  function update_1(){
      getMap()
    if(data.contents[key].answer.answer_1[1] === true){
      move()
       setKey(key + 1)
       setHPBoss(HPboss-100)
       removeData()
    } else {
      moveHer()
      setHPHeroes(HPheroes-100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(83)
      }
    }
  }
  function update_2(){
    getMap()
    if(data.contents[key].answer.answer_2[1] === true){
      move()
      setKey(key + 1)
      setHPBoss(HPboss-100)
      removeData()
    } else {
      moveHer()
      setHPHeroes(HPheroes-100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(83)
      }
    }
  }
  function update_3(){
    getMap()
    if(data.contents[key].answer.answer_3[1] === true){
      move()
      setKey(key + 1)
      setHPBoss(HPboss-100)
      removeData()
    } else {
      moveHer()
      setHPHeroes(HPheroes - 100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(83)
      }
    }
    
  }
  function update_4(){
    getMap()
    if(data.contents[key].answer.answer_4[1] === true){
      move()
      setKey(key + 1)
      setHPBoss(HPboss-100)
      removeData()
    } else {
      moveHer()
      setHPHeroes(HPheroes - 100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(83)
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
    if(key === 83 || 
       key === 84 ||
       key === 85 ||
       key === 86 ||
       key === 90 ||
       key === 91 ||
       key === 92 
      )
    {
     return content
    } else if (key === 87 || 
               key === 88 ||
               key === 89
              ){
     return content2
    } 
  }


  return (
  <main>
   <div className="header">
    <div className="wrapHeroes">
      <div className='contentHeroes'>
          <img className={heroes ? "heroes":"heroes2"} src={heroesImg} alt="heroes"/>
          <p className='HP'>Герои: {HPheroes}HP</p>
      </div>
      <div>
        <img className={bossFrog ? "bossFrog" : "bossFrog2"} src={bossSkillet} alt="bossSkillet"/>
        <p className='HP'>Скилет: {HPboss}HP</p>
      </div>
    </div>
  </div>
    {getContent()}
  </main>
  )
}

export default ContentBossSkillet