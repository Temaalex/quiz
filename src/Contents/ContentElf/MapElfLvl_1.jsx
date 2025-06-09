import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Elf_1 from '../../maps/Elf_1.png'

const MapElfLvl_1 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[12].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Elf_1}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapElfLvl_1