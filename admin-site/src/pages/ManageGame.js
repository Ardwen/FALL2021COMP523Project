import React from 'react'
import {useLocation, Link, useHistory} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import GameInfos from "./components/GameInfos";

const ManageGame = () =>{
    const location = useLocation();
    const thisGame = location.state.thisGame;
    return(
        <>
           <GameInfos thisGame={thisGame} />
           <Buttons />
           <Link to={'/home'}>
                <Button>Back to My Game Center</Button>
           </Link>
        </>
    )
}

const Buttons = ()=>{
    const buttons = [
        {bid:"pre", button: "Pre Event Management",
        description: "Manage quiz questions & pre-event settings"},
        {bid:"mid", button: "Mid Event Management",
        description: "Start a new game and manage during game"}
    ]
    return(
        <div className={"buttons"}>
            {Array.from(buttons).map((item, idx) => (
                <ManagementCard item = {item} key={`button${idx}`}/>
            ))}

        </div>

    )

}

const ManagementCard = ({item}) =>{
    const location = useLocation();
    const pathnamelist = location.pathname.split('/')
    const gid = pathnamelist[pathnamelist.length-1]
    return(
        <>
          <Card className="text-center" style={{margin: "5vh 5vw"}}>
                  <Card.Body>
                    <Card.Title>{item.button}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Link
                        to={{pathname:`/${item.bid}/${gid}`,
                        state:{thisGame: useLocation().state.thisGame}}}
                    >
                        <Button variant="primary" >GO</Button>
                    </Link>
                  </Card.Body>
                </Card>
        </>
    )
}

export default ManageGame;