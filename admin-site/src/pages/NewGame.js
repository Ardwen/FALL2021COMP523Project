import React from 'react';
import './css/NewGame.css'
import {Card, Col, Row} from "react-bootstrap";
import {gamelist} from "../mockdata";

function NewGame(){
    return (
        <>
            <div className={"NewGame"}>
                <div className={"overlay"}>
                    <HeaderSection />
                </div>
            </div>
        </>
    )
}

const HeaderSection = () =>{
    return(
        <>
            <h1 className={"title"}>Add New Game</h1>
            <div className="input-group">
                <input id={"searchtext"} type={"text"} autoComplete={"on"}/>
                <button type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </>
    )
}

const GameCards = (list) =>{
    return (
        <>
            {/*grid display for game cards*/}
            <Row xs={1} md={2} className="g-4 gameCards">
              {Array.from(list).map((game, idx) => (
                <Col key={game.gid}>
                  <Card>
                      <Card.Header>
                          <Card.Img variant="top" src={game.logo1} />
                          <span>vs.</span>
                          <Card.Img variant="top" src={game.logo2} />
                      </Card.Header>

                    <Card.Body>
                      <Card.Title>{game.name}</Card.Title>
                      <Card.Text>
                          {game.time}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        </>
    )
}


export default NewGame;