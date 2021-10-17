import React, {useState} from "react";
import './css/NewGame.css'
import {newgamelist} from "../mockdata";
import NewGameCard from "./components/NewGameCard";
import {Button, Row} from "react-bootstrap";
import NavSection from "./components/NavSection";

function NewGame(){
    const [list, setList] = useState(
        newgamelist
    )

    return (
        <>
            <NavSection />
            <div className={"background"}>
                <div className={"overlay"}>
                    <HeaderSection />
                    <GameCards list={list}/>
                </div>
            </div>
        </>
    )
}

const HeaderSection = () =>{
    const search = ()=>{
        console.log('search')
    }

    return(
        <>
            <h1 className={"title"}>Add New Game</h1>
            <div className="input-group">
                <input id={"searchtext"} type={"text"} autoComplete={"on"}/>
                <button type="button" className="btn btn-primary" onClick={search}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </>
    )
}

const GameCards = ({list}) =>{

    return (
        <>
            {/*grid display for game cards*/}
            <Row xs={1} md={2} className="g-4 gameCards">
              {Array.from(list).map((game, idx) => (
                    <NewGameCard key={game.gid} game={game}></NewGameCard>
              ))}
            </Row>
        </>
    )
}

export default NewGame;