import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import All_3 from '../../maps/All_3.png'

const MapBossGoblin = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[82].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={All_3}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapBossGoblin