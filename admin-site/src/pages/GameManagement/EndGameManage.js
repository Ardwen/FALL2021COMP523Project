import React from "react";
import {useLocation} from "react-router-dom";
import GameInfos from "../components/GameInfos";
import axios from "axios";
import {resultsURL} from "../../backend/restURL";
import {ListGroup, Row, Col} from "react-bootstrap";

const EndGameManage = () =>{
    const location = useLocation()
    // game info past in location.state.thisGame
    const thisGame = location.state.thisGame;
    return(
        <>
            <h1 style={{color: "#afe607"}}>Game Result Leaderboard</h1>
            <GameInfos thisGame={thisGame} />
            <LeaderBoard game = {thisGame}></LeaderBoard>
        </>
    )
}

const LeaderBoard = ({game}) =>{
    const [resultList, setResultList] = React.useState(Array.from([]));
      React.useEffect(() => {
        axios.get(resultsURL).then((response) => {
            //filter the result list for only this game
          setResultList(response.data.documents.map(item => item.fields).filter(result => result.gid.stringValue==game.gid))
        });
      }, []);


    let t1List = resultList.filter(result => result.tid.stringValue == "t1").sort((a,b) => b.score.integerValue - a.score.integerValue)
    let t2List = resultList.filter(result => result.tid.stringValue == "t2").sort((a,b) => b.score.integerValue - a.score.integerValue)
    let t1Score = t1List.map(result => parseInt(result.score.integerValue)).reduce((a,b) => a+b,0)
    let t2Score = t2List.map(result => parseInt(result.score.integerValue)).reduce((a,b) => a+b,0)
    console.log(t1Score)
    console.log(t2Score)

    return(
        <div>
            <Row>
                <Col>
                    <h3 style={{color:"white"}}>Total Score: {t1Score}</h3>
                    <ListGroup variant="flush">
                        {Array.from(t1List).map((result) => (
                             <ListGroup.Item>{result.uid.stringValue}: {result.score.integerValue}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col>
                    <h3 style={{color:"white"}}>Total Score: {t2Score}</h3>
                    <ListGroup variant="flush">
                        {Array.from(t2List).map((result) => (
                             <ListGroup.Item>{result.uid.stringValue}: {result.score.integerValue}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}



export default EndGameManage;