import React, { useContext, useState } from 'react'
import { StateContext } from '../Context/Context'
import { Link } from 'react-router-dom';

const QuestionTen = () => {
  const {questions,setQuestions} = useContext(StateContext)

  const [options, setOptions]=useState([
    {id:1, value:'Shiny',selected:false},
    {id:2, value:'Matte',selected:false},
    {id:3, value:'Dull',selected:false},
  ])

  const clickHandler = (e, obj)=>{
    setQuestions({...questions,skinTrend:e })
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

  return (
    <div className='flex'>
      <div className='h-[100vh] w-[70vw] flex justify-center items-center'>
        <div className='h-[50vh] w-[50vw]'>
          <div>
            <p className='text-[#7BC4AB] font-[700] text-[15px]'>YOUR SCREEN TIME</p>
            <p className='font-[500] text-[30px]'>How often are you in front of a screen?</p>
            <p className='font-[500] opacity-[0.5] text-[12px]'>Choose that apply</p>
          </div>
          <div className='flex mt-[2rem] flex-col gap-[0.5rem]'>
            <div className='flex shrink-0 flex-wrap gap-[1rem]'>
              <input value={questions.screenTime} onChange={e=>setQuestions({...questions, screenTime:e.target.value})} placeholder='Your Screen Time' className='w-[20rem] px-[1rem] focus:outline-none transition text-[20px] font-[500] opacity-[0.9] h-[3rem] transition border rounded border-[#7BC4AB]'/>
            </div>
          </div>
          <div className='flex w-[50vw] justify-start mt-[2rem]'>
            <Link to={'/11'} className={`w-[20rem] flex items-center justify-center ${questions.screenTime===''?'cursor-not-allowed':''} hover:bg-[#6fb09a] transition text-[20px] font-[500] opacity-[0.9] h-[3rem] bg-[#7BC4AB] text-[#fff] transition border rounded border-[#7BC4AB]`}>NEXT</Link>
          </div>
        </div>
      </div>
      <div className='h-[100vh]  bg-[#EFF9F4] w-[30vw]'></div>
    </div>
  )
}

export default QuestionTen