import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Human_5 from '../../maps/Human_5.png'

const MapHumanLvl_5 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[66].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Human_5}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapHumanLvl_5