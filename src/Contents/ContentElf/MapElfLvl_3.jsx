import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Elf_3 from '../../maps/Elf_3.png'

const MapElfLvl_3 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[38].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Elf_3}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapElfLvl_3