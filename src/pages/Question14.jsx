import React, { useContext, useState } from 'react'
import { StateContext } from '../Context/Context'

const QuestionFourteen = () => {
  const {questions,setQuestions} = useContext(StateContext)
  const [message, setMessage] = useState('')

  const [options, setOptions]=useState([
    {id:1, value:'Cold',selected:false},
    {id:2, value:'Hot',selected:false},
    {id:3, value:'Humid',selected:false},
    {id:3, value:'Polluted',selected:false},
  ])

  const clickHandler = (e, obj)=>{
    setQuestions({...questions,climate:e })
    let newOptions = options.map(f=>{
      return {...f, selected:false}
    })
    

    newOptions = newOptions.map(f=>{
      if(f.value===e){
        return {...f, selected:true}
      }
      else{
        return f
      }

      
    })
    setOptions(newOptions)
  }

  const handleClick = () =>{
    var ENDPOINT = 'https://askai.aiclub.world/44860347-27ad-447d-a983-8f1fb96e9311';

    var dataMood = `{
    "Age":"${questions.age}",
    "Gender":"${questions.gender}",
    "Skin_type":"${questions.skin}",
    "bothers":"${questions.skinBother}",
    "skincareroutine":"${questions.skinRoutine}",
    "photos":"${questions.skinTrent}",
    "water":"${questions.waterGlasses}",
    "sleep":"${questions.sleepHours}",
    "stress":"${questions.stressLevel}",
    "diet":"${questions.diet}",
    "screen_time":"${questions.screentime}",
    "products":"${questions.skinProduct}",
    "makeup":"${questions.makeup}",
    "remove_makeup":"${questions.makeupRemove}",
    "location":"${questions.climate}"}`;

    fetch(ENDPOINT, {
      method: 'POST',
      body: dataMood,
    })
      .then(res => res.json())
      .then(response => JSON.parse(response.body))
      .then(function (data) {
        console.log("processMoodPrediction: ", data);
        setMessage(data.Message)
      })
      .catch(err => console.log('err', err));

  }

  return (
    <div className='flex'>
      <div className='h-[100vh] w-[70vw] flex justify-center items-center'>
        <div className='h-[50vh] w-[50vw]'>
          <div>
            <p className='text-[#7BC4AB] font-[700] text-[15px]'>CLIMATE CONDITION</p>
            <p className='font-[500] text-[30px]'>What kind of climate do you live in?</p>
            <p className='font-[500] opacity-[0.5] text-[12px]'>Choose that apply</p>
          </div>
          <div className='flex mt-[2rem] flex-col gap-[0.5rem]'>
            <div className='flex shrink-0 flex-wrap gap-[1rem]'>
              {
                options.map(e=>{
                  return <button key={e.id} onClick={()=>clickHandler(e.value, e)} className={`w-[20rem] ${e.selected?'bg-[#7BC4AB] text-[#fff]':'text-[#000] hover:bg-[#7BC4AB] hover:text-[#fff]'} text-[12px] opacity-[0.9] h-[3rem]  border rounded transition border-[#7BC4AB]`}>{e.value}</button>
                })
              }
            </div>
          </div>
          <div className='flex w-[50vw] justify-center mt-[2rem]'>
            <button onClick={handleClick} className='w-[30rem] hover:bg-[#6fb09a] transition text-[20px] font-[500] opacity-[0.9] h-[3rem] bg-[#7BC4AB] text-[#fff] transition border rounded border-[#7BC4AB]'>Click here to get your personalised product</button>
          </div>
          <div className='mt-[1rem] flex justify-center'>
            <p className='font-sans font-[500] text-[26px]'>{message}</p>
          </div>
        </div>
      </div>
      <div className='h-[100vh]  bg-[#EFF9F4] w-[30vw]'></div>
    </div>
  )
}

export default QuestionFourteen