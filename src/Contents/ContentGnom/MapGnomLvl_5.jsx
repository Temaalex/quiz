import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Gnom_5 from '../../maps/Gnom_5.png'

const MapGnomLvl_5 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[58].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Gnom_5}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapGnomLvl_5