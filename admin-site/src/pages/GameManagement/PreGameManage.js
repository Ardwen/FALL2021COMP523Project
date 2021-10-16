import {useLocation} from "react-router-dom";
import GameInfos from "../components/GameInfos";
import {quizlist} from "../../mockdata";
import {Button} from "react-bootstrap";

const PreGameManage =() =>{
    const location = useLocation()
    // game info past in location.state.thisGame
    const thisGame = location.state.thisGame;
    const qidlist = thisGame.qidlist.arrayValue.values.map(qid=>qid.stringValue);
    console.log(qidlist)
    let currentlist = Array.from([]);
    qidlist.map((qid, idx) => {
        let quiz = quizlist.filter(q => q.qid == qid)[0];
        currentlist.push(quiz);
    })
    return(
        <>
            <h1 style={{color: "#afe607"}}>Pre Game Management</h1>
            <GameInfos thisGame={thisGame} />
            {currentlist.map((quiz, idx) =>(
                <QuizBlock key={`quiz${quiz.qid}`} quiz={quiz} />
            ))}
            <Button>Add Question</Button>
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