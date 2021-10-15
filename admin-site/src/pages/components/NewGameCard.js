import {Card, Col, Row} from "react-bootstrap";

const GameCard = ({game, addIcon}) =>{
    return (
        <Col>
                  <Card>
                      <Card.Header>
                          <Card.Img variant="top" src={game.logo1} />
                          <span>vs.</span>
                          <Card.Img variant="top" src={game.logo2} />
                      </Card.Header>

                    <Card.Body>
                      <Card.Title>{game.name}</Card.Title>
                      <Card.Text>
                          {game.date + ', ' + game.time}
                      </Card.Text>
                    </Card.Body>
                      {addIcon}
                  </Card>
        </Col>
    )
}

export default GameCard;