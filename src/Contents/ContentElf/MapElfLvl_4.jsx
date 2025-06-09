import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Elf_4 from '../../maps/Elf_4.png'

const MapElfLvl_4 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[50].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Elf_4}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapElfLvl_4