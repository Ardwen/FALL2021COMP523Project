import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import GameInfos from "../components/GameInfos";
import {BackToCenterButton, ManagementCard} from "../ManageGame";
import {quizlist} from "../../mockdata";
import {Button, ListGroup} from "react-bootstrap";

const StartGameManage = () =>{
    const location = useLocation() // game info past in location.state.thisGame
    const thisGame = location.state.thisGame;
    const qidlist = thisGame.qidlist.arrayValue.values.map(qid=>qid.stringValue); // get the quiz list for the current game
    let currentlist = Array.from([]);
    qidlist.map((qid, idx) => {
        let quiz = quizlist.filter(q => q.qid == qid)[0];
        currentlist.push(quiz);
    })

    let [myList, setCurrentList] = useState(currentlist)
    let [randomQuiz, setRandomQuiz] = useState(myList[Math.floor(Math.random()*myList.length)])
    let [quizDone, setQuizDone] = useState((myList.length==0))

    const handlePushQuestion = (e) =>{
        // remove current question
        setCurrentList(myList.filter(q => q.qid != randomQuiz.qid));
        setRandomQuiz(myList[Math.floor(Math.random()*myList.length)]);
        setQuizDone((myList.length==1));
        console.log(randomQuiz.qid)
        console.log(myList);
    }
    return(
        <>
            <h1 style={{color: "#afe607"}}>Game Start</h1>
            <GameInfos thisGame={thisGame} />
            <QuizDisplay quiz = {randomQuiz}/>
            <div>
                {console.log(quizDone)}
                {quizDone ? (
                     <BackToCenterButton text={"End Game"} />
                ):(
                     <Button onClick={handlePushQuestion}>Push Question</Button>
                )}
            </div>
        </>
    )
}

const QuizDisplay = ({quiz}) =>{

    return(
        <div>
            <h3 style={{color: "white"}}>{quiz.question}</h3>
            <ListGroup as="ul">
                {Array.from(quiz.answers).map((answer, idx) => (
                    <ListGroup.Item key={`answer${idx}`} as="li">
                        {answer}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default StartGameManage;