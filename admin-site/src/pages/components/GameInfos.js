import React from "react";

const GameInfos = ({thisGame}) =>{

    return(
        <>
                <h1 className={"title"}>{thisGame.name.stringValue}</h1>
                <p style={{color: "white"}}>
                    {thisGame.type.stringValue} <br />
                    {thisGame.date.timestampValue}
                </p>
        </>
    )
}

export default GameInfos;