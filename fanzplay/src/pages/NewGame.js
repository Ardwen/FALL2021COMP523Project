import React, {useState} from "react";
import './css/NewGame.css'
import {newgamelist} from "../mockdata";
import NewGameCard from "./components/NewGameCard";
import {Button, Row} from "react-bootstrap";
import NavSection from "./components/NavSection";
import axios from "axios";
import {gamesURL} from "../api/api";

const currentUid = "u1"

function NewGame(){
    const [list, setList] = useState(null);
    React.useEffect(() =>{
        axios.get(gamesURL).then((response) =>{
            setList(response.data);
        })
    }, []);

    const newGame = {
        date: "Oct 29",
        gid: "g4",
        location: "game location",
        logos: ['https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Virginia_Cavaliers_sabre.svg/1200px-Virginia_Cavaliers_sabre.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/640px-Miami_Hurricanes_logo.svg.png"'],
        name: "Wake Forest vs. Florida",
        qidlist: ['q1', 'q2', 'q3', 'q4'],
        quizNum: 4,
        tidlist: ['t3', 't4'],
        totalResult1: 50,
        totalResult2: 60,
        type: "NCAA Men's Basketball",
        uid: ['u2']
    }

    async function postGame(){
        try{
            const resp = await axios.post(gamesURL, newGame);
            console.log(resp.data);
        } catch (err){
            console.error(err);
        }
    }

    async function putGame(){
        try{
            const resp = await axios.put(gamesURL+`/qlJa8eE72r7eWEWG5VFb`,{uid: ["u1"]});
        } catch (err){
            console.error(err);
        }
    }

    if(list === null){
        return <div>Loading...</div>
    }
    return (
        <>
            <NavSection />
            <div className={"background"}>
                <div className={"overlay"}>
                    <HeaderSection />
                    <Button onClick={postGame}>Click Post</Button>
                    <Button onClick={putGame("g4",)}>Put Game</Button>
                    <Row xs={1} md={2} className="g-4 gameCards">
                      {Array.from(list.filter(g=>!g.uid.includes(currentUid))).map((game, idx) => (
                            <NewGameCard key={game.gid} game={game}></NewGameCard>
                      ))}
                    </Row>
                </div>
            </div>
            <Button onClick={postGame}>Post Game</Button>
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
export default NewGame;