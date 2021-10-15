import React, { Component } from 'react';
import axios from 'axios';
import Header from './header.js';
import {Link} from "react-router-dom";
import Button from './button';
import {getGames} from '../service/gamefunc';
import './game.css';

const game_list = [
  { id: 6, title: 'Duke vs North Carolina' },
  { id: 7, title: 'Dayton vs UMass' },
  { id: 8, title: 'Wake Forest vs NC state' },
  { id: 9, title: 'Kansas vs Kansas state' }
];

class GameList extends Component {
    constructor() {
        super();
        this.state = {
          games:[],
          fetchedgame:false,
          team1:null,
          team2:null,
          gamename:null,
          place:null,
          time:null,
          teampicked:false,
          team:null
        }
        this.pickTeam = this.pickTeam.bind(this);
        this.fetchGame = this.fetchGame.bind(this);
    }

    componentDidMount() {
        //axios.get(`/api/getquestions/${this.props.quiz.id}`).then(res => {
            //this.setState({ questions: res.data })
            //console.log(this.questions)
        //})
        console.log(getGames())
        this.setState({ games: game_list })
    }

    fetchGame(gameId) {
      //axios.get()
      this.setState({
          gamename:"NCAA Men’s Basketball",
          fetchedgame:true,
          place:"Dean Smith Center 300 Skipper Bowles Dr Chapel Hill, NC",
          time:"February 4th, 2020 1:00 PM",
          team1:"North Carolina",
          team2:"Duke"
      })
    }


    pickTeam(t){
           //this.socket.emit('question-answered', {name: this.props.nickname, answer: num, pin: this.props.selectedPin})
         this.setState({
             teampicked:true,
             team:t
           })
    }

    render() {
        let { games,fetchedgame,team1,team2,gamename,place,time,teampicked,team } = this.state;
        return (
            <div className='component-container' >
            <Header />
              {!fetchedgame?
                <div className='center' >
                <h2>Pick a Game to join</h2>
                <div className='center' >
                {games.map((item, i) => {
                    return (
                            <Button
                            key={i}
                            onClick={()=>this.fetchGame(item.id)}
                            id={item.id}
                            >
                            {item.title}
                            </Button>
                          );})}
                </div>
                </div>
                :
                !teampicked?
                   <div>
                    <div className='center' >
                        <h2 >Pick your team</h2>
                    </div>
                    <div className='center' >
                    <div class="grid-container">
                      <div class="grid-item"><button className="button" onClick={()=>this.pickTeam(team1)}>{team1}</button></div>
                      <div class="grid-item"><button className="button" onClick={()=>this.pickTeam(team2)}>{team2}</button></div>
                    </div>
                    </div>
                    <div className='center' >
                        <p >{gamename}</p>
                        <br/>
                        <p >{place}</p>
                        <br/>
                        <p >{time}</p>
                    </div>
                    </div>
                :
                <div className='center' >
                    <h2 className='player-name'>Today you are playing for</h2>
                    <br />
                      <h2>{team}</h2>
                    <br />
                    <div className='center' >
                    <Link to='/game'>
                        <button className='button'>
                            ready?
                        </button>
                    </Link>
                    </div>
                    </div>
              }
            </div>
        )
    }
}

export default GameList;
