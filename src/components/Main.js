import Member from "./Member";
import './Main.css'

const Main = () => {
    return ( 
        <main>
            <div className="display--card">
                <div className="title--container">
                    <h1 className="title">Site Kawasuji Seiryu Daiko</h1>    
                </div>    
            </div>
            <div className="members--container">
                <Member />
                <Member />
                <Member />
                <Member />
            </div>
        </main>
     );
}
 
export default Main;