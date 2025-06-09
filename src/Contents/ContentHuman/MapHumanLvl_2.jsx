import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Human_2 from '../../maps/Human_2.png'

const MapHumanLvl_2 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[30].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Human_2}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapHumanLvl_2