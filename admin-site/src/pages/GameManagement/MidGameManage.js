import {Link, useLocation} from "react-router-dom";
import GameInfos from "../components/GameInfos";
import React from "react";
import {ManagementCard, BackToCenterButton} from "../ManageGame";

const MidGameManage =() =>{
    const location = useLocation()
    // game info past in location.state.thisGame
    const thisGame = location.state.thisGame;
    return(
        <>
            <h1 style={{color: "#afe607"}}>Mid Game Management</h1>
            <GameInfos thisGame={thisGame} />
            <Buttons />
            <BackToCenterButton text={"Back To Center"}/>
        </>
    )
}

const Buttons = ()=>{
    const buttons = [
        {bid:"start", button: "Start Game",
        description: ""},
    ]
    return(
        <div className={"buttons"}>
            {Array.from(buttons).map((item, idx) => (
                <ManagementCard item = {item} key={`button${idx}`}/>
            ))}

        </div>
    )
}

export default MidGameManage;