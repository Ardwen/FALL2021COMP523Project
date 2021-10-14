import React from 'react'
import {useLocation, Link, useHistory} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import './css/ManageGame.css'

const ManageGame = () =>{

    return(
        <div className={'background'}>
            <div className={"overlay"}>
                <GameInfos />
                <Buttons />
                <Link to={'/home'}>
                    <Button>Back to My Game Center</Button>
                </Link>
            </div>
        </div>
    )
}

const GameInfos = () =>{
    const location = useLocation();
    const thisGame = location.state.thisGame;
    return(
        <>
            <h1 className={"title"}>{thisGame.name}</h1>
            <p style={{color: "white"}}>
                {thisGame.type} <br />
                {thisGame.date} <br />
                {thisGame.time}
            </p>
        </>
    )
}

const Buttons = ()=>{
    const buttons = [
        {button: "Pre Event Management",
        description: "Manage quiz questions & pre-event settings"},
        {button: "Mid Event Management",
        description: "Start a new game and manage during game"}
    ]
    return(
        <>
            {Array.from(buttons).map((item, idx) => (

                <Card className="text-center" key={`button${idx}`}>
                  <Card.Body>
                    <Card.Title>{item.button}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                          <Button variant="primary">Go</Button>
                  </Card.Body>
                </Card>
            ))}
        </>

    )

}

export default ManageGame;