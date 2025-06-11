import bossFrogImg from '../../Pictures/Frog.png';
import heroesImg from '../../Pictures/Party.png';
import data from '../../bd.json';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

const ContentBossFrog = () => {
  
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

  let [key, setKey] = useState(69);
  const [HPboss, setHPBoss] = useState(500)
  const [HPheroes, setHPHeroes] = useState(500)


 function getMap(){ 
    if(key === 73){
      move()
      key = 69
      navigate('/74')
    }
 }

  function update_1(){
      getMap()
    if(data.contents[key].answer.answer_1[1] === true){
       move()
       setKey(key + 1)
       setHPBoss(HPboss-100)
    } else {
      moveHer()
      setHPHeroes(HPheroes - 100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(69)
      }
    }
   
  }
  function update_2(){
    getMap()
    if(data.contents[key].answer.answer_2[1] === true){
      setKey(key + 1)
      setHPBoss(HPboss-100)
      move()
    } else {
      setHPHeroes(HPheroes - 100)
      moveHer()
      if(HPheroes === 100){
        navigate('/0')
        setKey(69)
      }
    }
  }
   function update_3(){
    getMap()
    if(data.contents[key].answer.answer_3[1] === true){
      move()
      setKey(key + 1)
      setHPBoss(HPboss-100)
      
    } else {
      moveHer()
      setHPHeroes(HPheroes - 100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(69)
      }
     
    }
  }
   function update_4(){
    getMap()
    if(data.contents[key].answer.answer_4[1] === true){
      move() 
      setKey(key + 1)
      setHPBoss(HPboss-100)    
    } else {
      setHPHeroes(HPheroes - 100)
      moveHer()
      if(HPheroes === 100){
        navigate('/0')
        setKey(69)
      }
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
          <img className={bossFrog ? "bossFrog" : "bossFrog2"} src={bossFrogImg} alt="bossFrog"/>
          <p className='HP'>Лягушки: {HPboss}HP</p>
      </div>
    </div>
  </div>
  <div>
    <div className='words'>{data.contents[key].quest}</div>
    <div className='buttons__content'>
      <button onClick={update_1} className="button">{data.contents[key].answer.answer_1[0]}</button>
      <button onClick={update_2} className="button">{data.contents[key].answer.answer_2[0]}</button>
      <button onClick={update_3} className="button">{data.contents[key].answer.answer_3[0]}</button>
      <button onClick={update_4} className="button">{data.contents[key].answer.answer_4[0]}</button>
    </div>
  </div>
  </main>
  )
}

export default ContentBossFrog