import etec_white from './resources/etec_white'

const Member = () => {
    return (
        <div className="member--card">
            <img src={etec_white} alt="" className="member--pfp"/>
            <div className="name--description--container">
                <div className="member--name">Fabrício Yohei Ynone</div>
                <div className="description">Membro</div>
            </div>
        </div>
      );
}
 
export default Member;