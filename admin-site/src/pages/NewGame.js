import {useState} from "react";
import './css/NewGame.css'
import {newgamelist} from "../mockdata";
import MyGameCard from "./components/MyGameCard";
import {Button, Row} from "react-bootstrap";

function NewGame(){
    const [list, setList] = useState(
        newgamelist
    )
    return (
        <>
           <HeaderSection />
           <GameCards list={list} />
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
    const ButtonSection = ()=>{
        return(
            <div className="buttonGroup">
                <Button>Add Game</Button>
                <Button>Details</Button>
            </div>
        )
    }

    return (
        <>
            {/*grid display for game cards*/}
            <Row xs={1} md={2} className="g-4 gameCards">
              {Array.from(list).map((game, idx) => (
                    <MyGameCard key={game.gid} game={game} addIcon={<ButtonSection key={game.gid+'button'} />}></MyGameCard>
              ))}
            </Row>
        </>
    )
}

export default NewGame;