import React, { useContext } from 'react'
import './App.css'
import { StateContext } from './Context/Context'
import QuestionZero from './pages/Question0'
import QuestionOne from './pages/Question1.jsx'
import QuestionTwo from './pages/Question2'
import QuestionThree from './pages/Question3'
import QuestionFour from './pages/Question4';
import QuestionFive from './pages/Question5';
import QuestionSix from './pages/Question6';
import QuestionSeven from './pages/Question7';
import QuestionEight from './pages/Question8';
import QuestionNine from './pages/Question9';
import QuestionTen from './pages/Question10';
import QuestionEleven from './pages/Question11'
import QuestionTwelve from './pages/Question12'
import QuestionThirteen from './pages/Question13'
import QuestionFourteen from './pages/Question14'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const App = () => {
  const {questions, setQuestions} = useContext(StateContext)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <QuestionZero/>
        </Route>
        <Route exact path={'/1'}>
          <QuestionOne/>
        </Route>
        <Route exact path={'/2'}>
          <QuestionTwo/>
        </Route>
        <Route exact path={'/3'}>
          <QuestionThree/>
        </Route>
        <Route exact path={'/4'}>
          <QuestionFour/>
        </Route>
        <Route exact path={'/5'}>
          <QuestionFive/>
        </Route>
        <Route exact path={'/6'}>
          <QuestionSix/>
        </Route>
        <Route exact path={'/7'}>
          <QuestionSeven/>
        </Route>
        <Route exact path={'/8'}>
          <QuestionEight/>
        </Route>
        <Route exact path={'/9'}>
          <QuestionNine/>
        </Route>
        <Route exact path={'/10'}>
          <QuestionTen/>
        </Route>
        <Route exact path={'/11'}>
          <QuestionEleven/>
        </Route>
        <Route exact path={'/12'}>
          <QuestionTwelve/>
        </Route>
        <Route exact path={'/13'}>
          <QuestionThirteen/>
        </Route>
        <Route exact path={'/14'}>
          <QuestionFourteen/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App