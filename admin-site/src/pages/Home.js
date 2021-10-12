import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import {gamelist} from "../mockdata";

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
            <h1>My Games</h1>
            <Button>ADD New Game</Button>
        </>
    )
}

const GameCards = () =>{
    return (
        <>
            {/*grid display for game cards*/}
            <Row xs={1} md={2} className="g-4">
              {Array.from(gamelist).map((game, idx) => (
                <Col key={game.gid}>
                  <Card>
                    <Card.Img variant="top" src={game.logo} />
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