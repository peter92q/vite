import React from 'react'

const Button = ({styles}) => {
  return (
    <button 
    type='button' 
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className={`py-4 px-6 bg-blue-gradient 
    font-poppins font-medium text-[18px] text-primary 
    outline-none rounded-xl ${styles} 
    hover:opacity-25 active:scale-[1.03]
    transition duration-150 ease-in-out
    `}
    >Get Started</button>
  )
}

export default Button
