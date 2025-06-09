import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Gnom_3 from '../../maps/Gnom_3.png'

const MapGnomLvl_2 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[34].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Gnom_3}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapGnomLvl_2