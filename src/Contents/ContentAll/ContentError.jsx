import data from '../../bd.json';
import GuildMaster from '../../Pictures/GuildMaster.png';

const Error = () => {
  let text = data.contents[0].error_text_GuilgMaster;
  return (
    <main>
      <div className="header">
      <div className="TextOfGuildMaster">
        <p className="ConnentOfGuildMaster" key='1'>{text}
        </p>
      </div>
      <img 
      className="GuildMaster"
      src={GuildMaster}
      alt="GuildMaster"/>
    </div>
      <div className='words'>Попробуй отсканировать QR-код занаво</div>
      <div></div>
    </main>
  )
  
}

export default Error