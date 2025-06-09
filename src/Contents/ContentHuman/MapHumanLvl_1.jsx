import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Human_1 from '../../maps/Human_1.png'

const MapHumanLvl_1 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[18].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Human_1}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapHumanLvl_1