import React, {useEffect} from "react"
import {useLocation} from "react-router-dom";
import GameInfos from "../components/GameInfos";
import {quizlist} from "../../mockdata";
import {Button} from "react-bootstrap";
import NavSection from "../components/NavSection";
import {questionURL} from "../../api/api";
import axios from "axios";

const PreGameManage =() =>{
    const location = useLocation()
    // game info past in location.state.thisGame
    const thisGame = location.state.thisGame;
    const qidlist = thisGame.qidlist;
    const [currentlist, setList] = React.useState([]);

    React.useEffect(()=>{
        axios.get(questionURL).then((response)=>{
            setList(response.data.filter(q=>qidlist.includes(q.id)))
            }).catch((err)=>console.error(err))
    }, [])

    return(
        <>
            <NavSection />
            <div className={"background"}>
                <div className={"overlay"}>
                    <h1 style={{color: "#afe607"}}>Pre Game Management</h1>
                    <GameInfos thisGame={thisGame} />
                    {currentlist.map((quiz, idx) =>(
                        <QuizBlock key={`quiz${quiz.id}`} quiz={quiz} />
                    ))}
                    <Button>Add Question</Button>
                </div>
            </div>
        </>
    )
}

const QuizBlock =({quiz})=>{
    const style = {
            display: "block",
            background: "rgb(251 251 251 / 30%)",
            borderRadius: "0.5em",
            padding: "0.5em",
            color: "white",
            margin: "1em 0em"
    }

    return(
        <div style={style}>{quiz.question}
        </div>
    )
}

export default PreGameManage;