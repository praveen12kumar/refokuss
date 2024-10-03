import React from 'react'

const Input = ({type, placeholder, onChangeHandler, styleType, value}) => {
  return (
    <input 
                type={type}
                value={value}
                className={`px-4 py-2 text-zinc-200 text-md font-nunito font-medium  outline-none rounded-md ${styleType} `}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
  )
}

export default Input