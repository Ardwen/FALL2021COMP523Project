import React from 'react';
import GameOver from './game_over'
import './game.css';

export default function GameQuestionOver(props){
    return(
        <div>
            {!props.gameOver ?
            <div className='center' >
                <div className='center' >
                    <h2 className='player-name'>Here are the result so far</h2>
                </div>
                <div class="grid-container">
                  <div class="grid-item"><h2>{props.team1_p}</h2><br/><h2>{props.team1}</h2></div>
                  <div class="grid-item"><h2>{props.team2_p}</h2><br/><h2>{props.team2}</h2></div>
                </div>
                <div className='center' >
                    <h2 className='player-name'>Stay tuned for the next round</h2>
                </div>
            </div>
            :
            <GameOver win={props.win} team1={props.team1} team2={props.team2}/>
        }
        </div>
    );
}
