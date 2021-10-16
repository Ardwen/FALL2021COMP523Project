import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Team extends Component {
    constructor() {
        super();
        this.state = {
            team1:None,
            team2:None,
            gamename:None,
            place:None,
            time:None,
            teampicked:None,
            team:None
        }
        this.pickTeam = this.pickTeam.bind(this);
    }
    componentDidMount() {
        axios.get(`/api/getquestions/${this.props.quiz.id}`).then(res => {
            this.setState({ questions: res.data })
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
        console.log(this.state)
        let { team1,team2,gamename,place,time,teampicked,team } = this.state;
        return (
            !teampicked?
            <div className='component-container' >
                <div className='center' >
                    <h1 className='player-name'>Pick your team</h1>
                </div>
                <div class="grid-container">
                  <div class="grid-item"><button className="button" onClick={this.pickTeam(team1)}>{team1}</button></div>
                  <div class="grid-item"><button className="button" onClick={this.pickTeam(team2)}>{team2}</button></div>
                </div>
                <div className='center' >
                    <h1 >{gamename}</h1>
                    <h2 >{place}</h2>
                    <h2 >{time}</h2>
                </div>
            </div>
            :
            <div className='component-container' >
                <div className='center' >
                    <h1 className='player-name'>Today you are playing for</h1>
                </div>
                <div class="grid-container">
                  <div>{team}</div>
                </div>
                <div className='center' >
                <Link to='/game'>
                    <button className='btn-newGame'>
                        ready?
                    </button>
                </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quiz: state.quiz
    }
}

export default connect(mapStateToProps)(Team)
