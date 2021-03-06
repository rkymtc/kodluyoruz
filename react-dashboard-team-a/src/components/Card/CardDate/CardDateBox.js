import Stats from "./CardDateStats";
import Data from "./CardDateData";


function Info(props){

    return (

        <div className={props.infoStatus}>
        <Stats date={props.date} status={props.status} statusDot={props.statusDot} className={props.className} statusText={props.statusText}/>
        <Data cardData={props.cardData} tasks={props.tasks} users={props.users}/>
        </div>


    )


}

export default Info;