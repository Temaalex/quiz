import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Gnom_1 from '../../maps/Gnom_1.png'

const MapGnomLvl_1 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[6].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Gnom_1}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapGnomLvl_1