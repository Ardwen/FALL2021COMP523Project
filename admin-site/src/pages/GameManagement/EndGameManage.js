import React from "react";
import {Link, useLocation} from "react-router-dom";
import GameInfos from "../components/GameInfos";
import {BackToCenterButton} from "../ManageGame";

const EndGameManage = () =>{
    const location = useLocation()
    // game info past in location.state.thisGame
    const thisGame = location.state.thisGame;
    return(
        <>
            <h1 style={{color: "#afe607"}}>End Game Management</h1>
            <GameInfos thisGame={thisGame} />
            <BackToCenterButton text={"Back To Center"} />
        </>
    )
}

export default EndGameManage;