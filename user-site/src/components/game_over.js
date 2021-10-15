import React from 'react';
import {Link} from 'react-router-dom';
import './game.css';


export default function GameOver(props){
    return(
      <div className='question-over-wrapper' >
          <div className='center' >
              <h2 className='player-name'>Here are the final results</h2>
          </div>
          <div class="grid-container">
            <div class="grid-item"><h2>{props.team1_p}</h2><br/><h2>{props.team1}</h2></div>
            <div class="grid-item"><h2>{props.team2_p}</h2><br/><h2>{props.team2}</h2></div>
          </div>
          <div className='center' >
          {
            props.win?
            <div className='center' >
            <h1 className='player-name'>Your team Won!</h1>
            <Link to='/rewards'>
            <button className='btn-newGame'>
                pick your rewards!
            </button>
            </Link>
            </div>
            :
            <div className='center' >
            <h2 className='player-name'>Thanks for your participation, Try next time!</h2>
            </div>
          }
          </div>
      </div>
    )
}
