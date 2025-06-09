import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Gnom_2 from '../../maps/Gnom_2.png'

const MapGnomLvl_2 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[22].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Gnom_2}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapGnomLvl_2