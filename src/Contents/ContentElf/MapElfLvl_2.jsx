import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';
import Elf_2 from '../../maps/Elf_2.png'

const MapElfLvl_2 = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" >{data.contents[26].textGuilgMaster}</p>
      </div>
      <img className="GuildMaster"src={GuildMaster}alt="GuildMaster"/>
    </div>
      <img className="maps" 
        src={Elf_2}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapElfLvl_2