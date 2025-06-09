import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import All_1 from '../../maps/All_1.png'

const MapForAll = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[68].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={All_1}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapForAll