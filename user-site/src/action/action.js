export const setQuizQuestions = data => {
  return {
    type: 'SET_QUIZ_QUESTIONS',
    quizData: data
  };
};

export const incrementRightAnswers = () => {
  return {
    type: 'INCREMENT_RIGHT_ANSWERS'
  };
};

export const updateCurrentQuestion = currentQuestion => {
  return {
    type: 'UPDATE_CURRENT_QUESTION',
    currentQuestion
  };
};
