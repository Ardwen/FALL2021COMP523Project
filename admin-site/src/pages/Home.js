import React from 'react';
import './css/Home.css'
import {Button, Card, Col, Row} from "react-bootstrap";
import {gamelist} from "../mockdata";

function Home(){
    return(
        <>
            <div className={"home"}>
                <div className={"overlay"}>
                    <HeaderSection />
                    <GameCards />
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
    return (
        <>
            {/*grid display for game cards*/}
            <Row xs={1} md={2} className="g-4 gameCards">
              {Array.from(gamelist).map((game, idx) => (
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

export default Home;