import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import All_5 from '../../maps/All_5.png'

const MapBossDragon = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[127].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
  
    </main>
  )
  
}

export default MapBossDragon