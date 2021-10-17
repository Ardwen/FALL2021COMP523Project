import {Button, Card, Col, Modal} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import {gamesURL} from "../../api/api";

function MyVerticallyCenteredModal(props) {
  const [putGame, setPutGame] = useState(false);

  React.useEffect(()=>{
      if (putGame == true){
         console.log("put game: " + props.game.id);
      }
  }, [putGame]);


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{textAlign: "center"}}>
            {props.game.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div style={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
              alignItems: "center"}}>
              <img src={props.game.logo1} style={{width: "40%"}}/>
              <span style={{padding: "0 0.5em", fontSize:"1.5em"}}>vs.</span>
              <img src={props.game.logo2} style={{width:"40%"}} />
          </div>
          <p style={{textAlign:"center"}}>
                Game Day: {props.game.date}<br />
                Time: {props.game.time}<br />
                Location: {props.game.location}<br />
                Quiz Number: {props.game.quizNum}
          </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{
            props.onHide();
            setPutGame((true));
        }}>Add Game</Button>

        <Button onClick={props.onHide}
                style={{backgroundColor: "cadetblue", border: "cadetblue"}}
        >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const NewGameCard = ({game}) =>{
    const [cardShow, setCardShow] = useState(false);

    return (
        <>
           <Col>
              <Card onClick={() => setCardShow((true))} style={{cursor: "pointer"}}>
                      <Card.Header
                          style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          textAlign: "center",
                          alignItems: "center"}}>
                          <Card.Img variant="top" src={game.logos[0]} />
                          <span style={{padding: "0 0.5em", fontSize:"1.5em"}}>vs.</span>
                          <Card.Img variant="top" src={game.logos[1]} />
                      </Card.Header>

                    <Card.Body>
                      <Card.Title>{game.name}</Card.Title>
                      <Card.Text>
                          {game.date + ', ' + game.time}
                      </Card.Text>
                    </Card.Body>
                  </Card>
           </Col>

           <MyVerticallyCenteredModal
                show={cardShow}
                onHide={() => {setCardShow(false)}}
                game = {game}
           />
        </>
    )
}

export default NewGameCard;