import React, { Component } from 'react';
import axios from 'axios';
import Header from './header.js';
import GameQuestionOver from './question_over';
import Button from './button';


class Game extends Component {
    constructor() {
        super();
        this.state = {
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
    }
    componentDidMount() {
        //axios.get(`/api/getquestions/${this.props.quiz.id}`).then(res => {
          //  this.setState({ questions: res.data })
            //console.log(this.questions)
        //})


        this.setState({
          team1:"Duke",
          team2:"North Carolina",
          team:"North Carolina"})
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
      this.setState({
        correctAnswer:0,
        questionOver:true,
        seconds: 0
      });
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
            questionOver: true,
            timer: 20
        })
    }


    nextQuestion() {
        this.setState({
          question: "Which coach has the most career NCAA tournament wins?",
          answer:[
            { id: 0, title: "John Wooden" },
            { id: 1, title: "Roy Williams" },
            { id: 2, title: "Mike Kryzewski"},
            { id: 3, title: "North Carolina"}
          ],
          questionOver:false,
          isLive:true});
        this.start_timer();
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
        return (
            <div className='component-container' >
            <Header />
                {
                    !isLive && !questionOver && !gameOver ?
                        <div className='center' >
                            <div>
                              <p>You are playing for</p>
                              <p>{team}</p>
                            </div>
                            <h2>We will let you know when it's time to play</h2>
                            <button onClick={()=>this.nextQuestion()}>start</button>
                        </div>
                        :
                        //questionBoard
                        isLive && !questionOver && !gameOver ?
                        <div className='questions-container' >
                            <h1 className='player-name'>{question}</h1>
                            <div className='center' >
                            {answer.map((item, i) => {
                                return (
                                        <Button
                                        key={i}
                                        onClick={()=>this.submitAnswer(item.id)}
                                        id={item.id}
                                        >
                                        {item.title}
                                        </Button>
                                    );})}
                            </div>
                            <span>{timer-seconds}</span>
                        </div>
                            :
                            <GameQuestionOver
                                team1={team1}
                                team2={team2}
                                team1_p={team1_points}
                                team2_p={team2_points}
                                lastQuestion={gameOver}
                                correct={selectedAnswer===correctAnswer}
                                win={win}  />
                }
            </div>
        )
    }
}
export default Game;
