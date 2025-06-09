import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Human_3 from '../../maps/Human_3.png'

const MapHumanLvl_3 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[42].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Human_3}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapHumanLvl_3