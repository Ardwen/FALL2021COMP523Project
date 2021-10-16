import React, { Component } from 'react';
import axios from 'axios';
import Header from './header.js';
import GameQuestionOver from './question_over';
import Button from './button';
import {questionURL,gameURL} from "../api/api";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            gid:null,
            timer: 10,
            isLive: false,
            questionOver: false,
            gameStart:false,
            gameOver: false,
            team1:null,
            team2:null,
            team1_points:0,
            team2_points:0,
            win:false,
            team: null,
            question:null,
            answer:[],
            selectedAnswer:-1,
            correctAnswer:-1,
            seconds: 0
        }
        this.questionOver = this.questionOver.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.end_game = this.end_game.bind(this);
    }
    componentDidMount() {
        this.setState({
          gid:localStorage.getItem('gid'),
          team:localStorage.getItem('team')});
    }

    tick() {
      if (this.state.seconds === this.state.timer) {
        this.end_timer()
      } else {
        this.setState((prevState) => ({
          seconds: prevState.seconds + 1
        }));
      }
    }

    start_timer() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

    end_timer() {
      clearInterval(this.interval);
      axios.get(gameURL(this.state.gid)).then(res => {
            let data = res.data.fields
            this.setState({
               team1_points:data.totalResult1.integerValue,
               team2_points:data.totalResult2.integerValue,
               team1:data.logos.arrayValue.values[0].stringValue,
               team2:data.logos.arrayValue.values[1].stringValue,
               questionOver:true,
               seconds: 0
             });
        })
    }

    startGame() {
            this.nextQuestion()
            this.setState({
                isLive: true,
                gameStart:true
            })
    }

    questionOver() {
        this.setState({
            questionOver: true
        })
    }

    end_game() {
      this.setState({
          questionOver: true,
          gameOver: true,
          win:true
      })
    }


    nextQuestion() {
      axios.get(questionURL).then(res => {
        let data=res.data.fields;
        this.setState({
          question: data.question.stringValue,
          answer:data.answers.arrayValue.values,
          correctAnswer: data.correctIdx.integerValue,
          questionOver:false,
          isLive:true});
          this.start_timer();
        });
    }

    submitAnswer(name, id) {
      //axios.put()
        this.setState({
            selectedAnswer: id
        })
    }

    render() {
        console.log(this.state)
        let {timer,isLive, questionOver,gameStart,gameOver,team1,team2,team1_points,team2_points, win,team,question,answer,selectedAnswer,correctAnswer,seconds} = this.state;
        let timeLeft = timer - seconds;
        return (
            <div className='component-container' >
            <Header />
                {
                    !isLive && !questionOver && !gameOver ?
                        <div className='center' >
                        <div>
                              <h3>You are playing for</h3>
                              <img src={team} style={{width: "100%"}}/>
                        </div>
                            <h2>We will let you know when it's time to play</h2>
                            <button onClick={()=>this.nextQuestion()}>start</button>
                        </div>
                        :
                        //questionBoard
                        isLive && !questionOver && !gameOver ?
                        <div className='questions-container' >
                            <div className='center' >
                            <h2>{timeLeft}</h2>
                            <br/>
                            <br/>
                            <p className='player-name'>{question}</p>
                            <div className='center' >
                            {answer.map((item, i) => {
                                return (
                                        <Button
                                        key={i}
                                        onClick={()=>this.submitAnswer(i)}
                                        id={i}
                                        >
                                        {item.stringValue}
                                        </Button>
                                    );})}
                              </div>
                            </div>
                        </div>
                            :
                            <div>
                            <GameQuestionOver
                                team1={team1}
                                team2={team2}
                                team1_p={team1_points}
                                team2_p={team2_points}
                                lastQuestion={gameOver}
                                correct={selectedAnswer===correctAnswer}
                                gameOver={gameOver}
                                win={win}  />
                                <button onClick={()=>this.end_game()}>end</button>
                                </div>
                }
            </div>
        )
    }
}
export default Game;
