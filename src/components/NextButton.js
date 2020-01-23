import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import './button.css'

export const NextButton = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.quiz.answers)
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex)
  const questions = useSelector((state) => state.quiz.questions)

  console.log(answers.length)
  console.log(questions.length)
  console.log(questions.length-1)
  console.log(currentQuestion)

  return (
    <>
      {answers.length <= (questions.length - 1) && answers.length > currentQuestion &&
        <button type="button" onClick={() => {
          dispatch(quiz.actions.setProgress())
          dispatch(quiz.actions.goToNextQuestion())
        }}>
          Next Question
      </button>
      }
      {answers.length === questions.length &&
        <button type="button" onClick={() => {
          dispatch(quiz.actions.setProgress())
          dispatch(quiz.actions.goToNextQuestion())
        }}>
          Show result fix
      </button>
      }

    </>
  )
}