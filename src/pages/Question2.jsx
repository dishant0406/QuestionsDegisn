import React, { useContext, useState } from 'react'
import { StateContext } from '../Context/Context'
import { Link } from 'react-router-dom';

const QuestionTwo = () => {
  const {questions,setQuestions} = useContext(StateContext)

  const [options, setOptions]=useState([
    {id:1, value:'Male',selected:false},
    {id:2, value:'Female',selected:false},
    {id:3, value:'Prefer not to say',selected:false},
    {id:4, value:'Non-binary',selected:false},
  ])

  const clickHandler = (e, obj)=>{
    setQuestions({...questions, gender:e })
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
            <p className='text-[#7BC4AB] font-[700] text-[15px]'>GENDER</p>
            <p className='font-[500] text-[30px]'>What is your gender?</p>
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
            <Link to={'/3'} className='w-[20rem] flex items-center justify-center hover:bg-[#6fb09a] transition text-[20px] font-[500] opacity-[0.9] h-[3rem] bg-[#7BC4AB] text-[#fff] transition border rounded border-[#7BC4AB]'>NEXT</Link>
          </div>
        </div>
      </div>
      <div className='h-[100vh]  bg-[#EFF9F4] w-[30vw]'></div>
    </div>
  )
}

export default QuestionTwo