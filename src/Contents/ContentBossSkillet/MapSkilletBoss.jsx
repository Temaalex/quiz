import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import All_4 from '../../maps/All_4.png'

const MapBossSkillet = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[93].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={All_4}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapBossSkillet