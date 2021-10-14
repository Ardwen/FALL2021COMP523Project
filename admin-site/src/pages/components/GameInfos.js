import React from "react";

const GameInfos = ({thisGame}) =>{

    return(
        <>
                <h1 className={"title"}>{thisGame.name}</h1>
                <p style={{color: "white"}}>
                    {thisGame.type} <br />
                    {thisGame.date} <br />
                    {thisGame.time}
                </p>
        </>
    )
}

export default GameInfos;