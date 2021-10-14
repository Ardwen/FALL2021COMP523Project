import {useLocation} from "react-router-dom";
import GameInfos from "./components/GameInfos";

const PreGameManage =() =>{
    const location = useLocation()
    // game info past in location.state.thisGame
    const thisGame = location.state.thisGame;
    return(
        <>
            <GameInfos thisGame={thisGame} />
        </>
    )
}

export default PreGameManage;