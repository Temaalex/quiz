import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import All_5 from '../../maps/All_5.png'

const MapBossUticora = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[106].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={All_5}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapBossUticora