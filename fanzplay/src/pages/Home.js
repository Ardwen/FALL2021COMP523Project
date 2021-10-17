import React from 'react';
import './css/Home.css'
import {Button, Row, Modal} from "react-bootstrap";
import MyGameCard from "./components/MyGameCard";
import {gamesURL} from "../api/api"
import axios from "axios";
import NavSection from "./components/NavSection";

function Home(){
    return(
        <>
            <NavSection />
            <div className={"background"}>
                <div className={"overlay"}>

                    <HeaderSection />
                    <GameCards/>
                </div>
            </div>
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

const GameCards = () =>{
    const [gameList, setGameList] = React.useState(null);
    React.useEffect(()=>{
        axios.get(gamesURL).then((response) =>{
            setGameList(response.data.documents.map(item => item.fields))
        })
    }, []);
    if (gameList === null){
        return <div>Loading...</div>
    }
    return (
        <>
            {console.log(gameList[0].uid.arrayValue.values)}
            {/*grid display for game cards*/}
            <Row xs={1} md={2} className="g-4 gameCards">
              {Array.from(gameList).map((game, idx) => (
                <MyGameCard key={game.gid.stringValue} game={game} />
              ))}
            </Row>
        </>
    )
}

// GameCards.defaultProps = {
//     list: mygamelist,
// }

export default Home;