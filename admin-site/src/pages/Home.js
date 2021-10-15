import React from 'react';
import './css/Home.css'
import {Button, Row, Modal} from "react-bootstrap";
import {mygamelist} from "../mockdata";
import MyGameCard from "./components/MyGameCard";

function Home(){
    return(
        <>
            <HeaderSection />
            <GameCards />

        </>

    )
}

const HeaderSection = ()=>{
    return (
        <>
            <h1 className={"title"}>My Games</h1>
            <Button href={"/newGame"} id={"addNewGame"}>ADD New Game</Button>
        </>
    )
}

const GameCards = ({list}) =>{
    return (
        <>
            {/*grid display for game cards*/}
            <Row xs={1} md={2} className="g-4 gameCards">
              {Array.from(list).map((game, idx) => (
                <MyGameCard key={game.gid} game={game} />
              ))}
            </Row>
        </>
    )
}

GameCards.defaultProps = {
    list: mygamelist,
}

export default Home;