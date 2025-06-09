import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Human_4 from '../../maps/Human_4.png'

const MapHumanLvl_4 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[54].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Human_4}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapHumanLvl_4