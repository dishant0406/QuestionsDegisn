import React, { createContext, useEffect, useState } from 'react'

const StateContext = createContext()

const ContextProvider = ({children}) => {
  
  const [questions, setQuestions] = useState({
    age:'',
    gender:'',
    skin:'',
    skinBother:'',
    skinRoutine:'',
    skinTrend:'',
    waterGlasses:'',
    sleepHours:'',
    stressLevel:'',
    diet:'',
    screenTime:'',
    skinProduct:'',
    makeup:'',
    makeupRemove:'',
    climate:''
  })

  return (
    <StateContext.Provider 
    value={{ questions, setQuestions }}>
      {children}
    </StateContext.Provider>
  )
}

export {StateContext}
export default ContextProvider